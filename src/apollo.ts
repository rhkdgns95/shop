import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { FRAGMENT_PRODUCT } from "./fragment";
import { gql } from "apollo-boost";
const cache = new InMemoryCache();

const link: HttpLink = new HttpLink({
    uri: "https://api-euwest.graphcms.com/v1/cjmrqz1hg3g4001b9913bj7lk/master" // Uri 수정 예정.
});

cache.writeData({
    data: {
        similarProducts: { 
            __typename: "SimilarProduct",
            products: []
        },
        cart: [],
    }
});
const client = new ApolloClient({
    cache,
    link,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network'
        }
    },
    resolvers: {
        Query: {
            GetMyData: (_, __, { cache }) => {}
        },
        Mutation: {
            /**
             *  toggleProduct
             * 
             *  getCachekey
             *  - cache에 존재하는 값의 id값을 가져온다.
             *  - 결과로는 Product:##22244safsaf 같이 가져옴.
             * 
             *  readFragment
             *  - cache에 데이터를 fragment를 사용해서 가져오며, 필수요소로 다음과같다.
             *  - fragment: 가져올 데이터 스키마.
             *  - id: 데이터에 저장된 ID가 아닌, cache의 ID가 필요하다.
             *  - ex) id = Product:cjmldsfafdoo... 와같이 저장되어있다.
             *  
             *   순서) 카트를 캐시에 저장하는 방법.
             *   1) 상품의 Cache Id를 가져온다. - 해당상품의 캐시_id 가져오기.
             *   2) 상품을 read.fragment로 가져온다. - 해당상품정보 가져오기.
             *   : fragment는 해당상품의 스키마가 저장되었으며, cacheId과 속성을 가져오는데 유용하다.
             *   3) 현재 카트의 전체를 가져온다. 왜냐?
             *   : 이때 주의점으로 cart의 id값을 가져오지않으면 빈 객체이므로 실행되지 않는다.
             *   4) 카트에 해당상품과 이전카트목록을 함께 저장하기 위해서.
             *   5) 이미 카트목록에있는경우 onCart 속성을 true -> false로 변경하여 적는다.
             */  
            ToggleCart: (_, { id }, { cache, getCacheKey }: { cache: InMemoryCache, getCacheKey: any }) => {
                console.log("ToggleCart: ");
                // [1]
                const cacheId = getCacheKey({ __typename: "Product", id }); 
                // [2]
                const fragment = gql`
                    ${FRAGMENT_PRODUCT}
                `;
                const product: T_Product | null = cache.readFragment({ fragment, id: cacheId });
                // [3]
                const query = gql`
                    {
                        cart @client {
                            id
                            ...ProductItems
                        }
                    }
                    ${FRAGMENT_PRODUCT}
                `;
                if(product) {
                    const { cart: carts } = cache.readQuery({ query }) || {cart: []};
                    let newCarts: Array<T_Product> = [];
                    let onCart: boolean;
                    const foundCart = carts.find((aProduct: T_Product) => aProduct.id === product.id);
                    // 이미 카트안에 데이터가있는경우는 ?
                    // 제거한다.
                    if(foundCart) {
                        newCarts = carts.filter((aProduct: T_Product) => aProduct.id !== product.id);
                        onCart = false;
                    } else {
                        newCarts = [
                            ...carts,
                            product
                        ]
                        onCart = true;
                    }
                    
                    // [4]
                    cache.writeData({
                        data: {
                            cart: newCarts
                        }
                    });

                    // [5]
                    cache.writeFragment({
                        id: `Product:${product.id}`,
                        fragment: FRAGMENT_PRODUCT,
                        data: {
                            __typename: "Product",
                            ...product,
                            onCart
                        }
                    });
                }
            }
        },
        Product: {
            onCart: (_, __, { cache }) => {
                console.log("onCart!");
                return false;
            }
        }
    }
});

export default client;