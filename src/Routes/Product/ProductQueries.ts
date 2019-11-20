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