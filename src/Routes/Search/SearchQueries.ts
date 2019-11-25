import { gql } from "apollo-boost";
import { FRAGMENT_PRODUCT } from "../../fragment";

export const SEARCH_PRODUCTS = gql`
    query searchProducts($text: String!) {
        products(where: {
            OR: [
                { name_contains: $text },
                { detail_contains: $text }
            ]
        }) {
            ...ProductItems
        }
    }
    ${FRAGMENT_PRODUCT}
`;