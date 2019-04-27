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

export const LOCAL_USER_LOGOUT = gql`
  mutation userLogout {
    userLogout @client
  }
`;

export const CHECK_LOGIN = gql`
  query getUser {
    getUser {
      uuid
    }
  }
`;
