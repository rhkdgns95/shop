import React from "react";
import { useQuery } from "react-apollo";
import { GET_PRODUCT } from "./ProductQueries";

interface IProductCotext {
    queryProductData: IGetProductResponse | undefined
}
const InitProductContext: IProductCotext = {
    queryProductData: undefined
};
const ProductContext: React.Context<IProductCotext> = React.createContext<IProductCotext>(InitProductContext);
const useProductProvider = () => React.useContext(ProductContext);

const useFetch = (productId: string): { value: IProductCotext } => {
    const { data: queryProductData } = useQuery<IGetProductResponse, IGetProductQueryVariables>(GET_PRODUCT, {
        variables: {
            id: productId
        },
        onError: data => {
            console.log("getProduct Error: ", data, {

            });
        }
    })
    return {
        value: {
            queryProductData
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

export { useProductProvider };
export default ProductProvider;