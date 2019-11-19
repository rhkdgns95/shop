import { gql } from "apollo-boost";
import { FRAGMENT_PRODUCT } from "../../fragment";

export const GET_PRODUCTS = gql`
    query getProducts($id: ID) {
        AllProducts: products {
            ...ProductItems
        }
        Products: products (where: { category_some: {id: $id} }) {
            ...ProductItems
        }
    }
    ${FRAGMENT_PRODUCT}
`;