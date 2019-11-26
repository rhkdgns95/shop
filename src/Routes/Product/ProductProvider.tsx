import React, { useEffect, useState } from "react";
import { useQuery, useLazyQuery, useApolloClient, useMutation } from "react-apollo";
import { GET_PRODUCT, GET_SIMILAR_PRODUCTS, GET_CACHE_SIMILAR_PRODUCTS } from "./ProductQueries";
import { useAppContext } from "../App/AppProvider";

interface IProductCotext {
    queryProductData: IGetProductResponse | undefined;
    handleSimilarProducts: (data: IGetProductResponse) => any;
    pagination: number;
    loadingSimilarQueryProducts: boolean;    
}
const PaginationCount: number = 2;
const InitProductContext: IProductCotext = {
    queryProductData: undefined,
    handleSimilarProducts: () => {},
    pagination: 0,
    loadingSimilarQueryProducts: true,
};
const ProductContext: React.Context<IProductCotext> = React.createContext<IProductCotext>(InitProductContext);
const useProductContext = () => React.useContext(ProductContext);

const useFetch = (productId: string): { value: IProductCotext } => {
    const { isProgress, handleProgress } = useAppContext();
    const { cache } = useApolloClient();
    const [ pagination, setPagination ] = useState(0);

    const [ getSimilarProducts, { data: querySimilarProducts, loading: loadingSimilarQueryProducts }] = useLazyQuery<IGetSimilarProductsQueryResponse, IGetSimilarProductsQueryVariables>(GET_SIMILAR_PRODUCTS, {
        onError: data => {
            console.log("GetSimilarProducts Error: ", data)
        },
        onCompleted: (data) => {
            // console.log("GET similar Datas: ", data);
            // 검색할 갯수이하라면, 
            // 비슷한 상품검색을 전부한것이므로, -1로 만들어주고, 
            // 상품검색하는 버튼을 제거해주도록 한다.
            const cacheData: ICacheProducts | null = cache.readQuery({
                query: GET_CACHE_SIMILAR_PRODUCTS
            });

            // newProducts
            // 마지막 값하나를 빼준다. 왜냐하면 N+1개씩 불러와서 
            // 다음값이 있는지 없는지확인을 하기위한용도이다.
            let newProducts: Array<T_Product> = data.products.filter((product, key) => key !== PaginationCount);

            // cacheData에 이미 존재하는 데이터가있다면, 합칠필요가 있다.
            if(cacheData && 
                cacheData.similarProducts && 
                cacheData.similarProducts.products) {
                newProducts = [
                    ...cacheData.similarProducts.products,
                    ...newProducts
                ]
            }
            cache.writeData({
                data: {
                    similarProducts: { 
                        __typename: "SimilarProduct",
                        products: newProducts
                    }
                }
            });

            /**
             *  개선할 것!
             * 
             *  중요한점은 캐시업데이트로 인하여 UI가 변경되는것이 아닌, 
             *  useState()의 변환해주는 setPagination으로인하여 UI가 변경되는것이다.
             *  이점을 캐시 업데이트로 인하여 UI가 변경되도록 리팩토링 해야함.
             */
            if(data.products && data.products.length < PaginationCount + 1) {
                setPagination(-1);
            } else {
                setPagination(pagination + PaginationCount);
            }
        }
    });

    /**
     *  handleSimilarProducts
     * 
     *  @param data 
     *  쿼리 GET_PRODUCT가 실행되고 난 후 비슷한 카테고리를 검색하도록 도와준다. 
     *  이때 pagination을 걸어두도록 pagintation값을 증가시켜야함.
     */
    const handleSimilarProducts = (data: IGetProductResponse) => {
        const { product } = data;
        if(product && pagination !== -1) {
            const categories_id: Array<string> = product.category.map(category => category.id);
            getSimilarProducts({
                variables: {
                    product_id: productId,
                    categories_id,
                    skip: pagination,
                    first: (PaginationCount + 1) // +1을 하는 이유는 다음값이 있는지 여부이며, 이것은 캐시에 저장되지 않는다.
                }
            });
        }
    }

    const { data: queryProductData, loading: productLoading } = useQuery<IGetProductResponse, IGetProductQueryVariables>(GET_PRODUCT, {
        variables: {
            id: productId
        },
        onCompleted: handleSimilarProducts,
        onError: data => {
            console.log("getProduct Error: ", data);
        }
    });
    
    useEffect(() => {
        // 맨처음에는 cache에 존재하는 유사한 
        // 현재 상품의 카트목록에 있는 데이터를 제거할 필요가있다.
        
        return () => {
            if(isProgress) {
                handleProgress(false);
            }
        }
    }, []);
    
    useEffect(() => { 

        return () => {
            // Page Moving
            // pagination 초기화 + cache데이터 초기화
            cache.writeData({
                data: {
                    similarProducts: { 
                        __typename: "SimilarProduct",
                        products: []
                    }
                }
            });
            setPagination(0);
        }
    }, [productId])

    useEffect(() => {
        if(isProgress && !productLoading) {
            handleProgress(false);
        }
    }, [productLoading]);

    return {
        value: {
            queryProductData,
            handleSimilarProducts,
            pagination,
            loadingSimilarQueryProducts,
        }
    }
};

const ProductProvider: React.FC<any> = ({
    children,
    productId
}) => (
    <ProductContext.Provider {...useFetch(productId)}>
        {
            children
        }   
    </ProductContext.Provider>
);

export { useProductContext };
export default ProductProvider;