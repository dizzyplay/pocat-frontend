import { gql } from "apollo-boost";

export const SET_CURRENT_CAT = gql`
  mutation setCurrentCat($uuid: String) {
    setCurrentCat(uuid: $uuid) @client
  }
`;

export const GET_CURRENT_CAT = gql`
  {
    current_cat_uuid @client
  }
  
`;
