import { gql } from "apollo-boost";
import { FRAGMENT_PRODUCT } from "../../fragment";

export const GET_CATEGORIES = gql`
    {
        categories {
            id
            name
        }
    }
`;
export const TOGGLE_CART = gql`
    mutation toggleCart($id: ID!) {
        ToggleCart(id: $id) @client
    }
`;
export const GET_CARTS = gql`
    {
        carts: cart @client {
            id
            ...ProductItems
        }
    }
    ${FRAGMENT_PRODUCT}
`;