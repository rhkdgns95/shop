import { gql } from "apollo-boost";
import { FRAGMENT_PRODUCT } from "../../fragment";

export const GET_CARTS = gql`
    {
        cart @client {
            ...ProductItems
        }
    }
    ${FRAGMENT_PRODUCT}
`;