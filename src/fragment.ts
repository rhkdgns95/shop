import { gql } from "apollo-boost";

export const FRAGMENT_PRODUCT = gql`
    fragment productItems on Product {
        id
        name
        details
        photo {
            url
        }
        price
    }
`;