import { gql } from "apollo-boost";
import { FRAGMENT_PRODUCT } from "../../fragment";

export const GET_PRODUCT = gql`
    query getProduct($id: ID!) {
        product(where: { id: $id }) {
            ...ProductItems
        }
    }
    ${FRAGMENT_PRODUCT}
`;

/**
 *  GET_SIMILAR_PRODUCTS는 다음 조건이 2가지가 있다.
 * 
 *  1. categories의 id를 전부 가지고 있는 array타입의 category_id를 포함. (in)
 *  2. pagination을 위해 n개씩 검색하도록 만드는 기능. (first, skip)
 */
export const GET_SIMILAR_PRODUCTS = gql`
    query getOthers($product_id: ID! $categories_id: [ID!] $skip: Int! $first: Int!) {
        products(
        where: { 
            category_some: {
                id_in: $categories_id
            }
            id_not: $product_id
        }
        skip: $skip
        first: $first
        ) {
            ...ProductItems
        }
    }
    ${FRAGMENT_PRODUCT}
`;

export const GET_CACHE_SIMILAR_PRODUCTS = gql`
    {
        similarProducts @client {
            products {
                ...ProductItems
            }
        }
    }
    ${FRAGMENT_PRODUCT}
`;