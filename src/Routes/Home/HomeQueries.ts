import { gql } from "apollo-boost";
import { FRAGMENT_PRODUCT } from "../../fragment";

export const GET_PRODUCTS = gql`
    {
        AllProducts: products {
            ...ProductItems
        }
        onSaleProducts: products (where: { onSale: true }) {
            ...ProductItems
        }
    }
    ${FRAGMENT_PRODUCT}
`;