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

export const CAT_KINDS_LIST = gql`
  query {
    catKindsList {
      id
      title
    }
  }
`;

export const ADD_CAT = gql`
  mutation addCat(
    $name: String!
    $gender: String!
    $kindsId: Int!
    $birth: String!
  ) {
    addCat(name: $name, gender: $gender, kindsId: $kindsId, birth: $birth) {
      uuid
    }
  }
`;
