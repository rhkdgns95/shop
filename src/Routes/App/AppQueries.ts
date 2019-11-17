import { gql } from "apollo-boost";

export const GET_CATEGORIES = gql`
    {
        categories {
            id
            name
        }
    }
`;