import { gql } from "apollo-boost";

export const LOGIN = gql`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      token
    }
  }
`;

export const LOCAL_LOGIN = gql`
  mutation userLogin($token: String!) {
    userLogin(token: $token) @client
  }
`;

export const SINGUP = gql`
  mutation createUser($email: String!) {
    createUser(email: $email)
  }
`;

export const CONFIRM_SECRET = gql`
  mutation confirmSecret($email: String!, $secret: String!) {
    confirmSecret(email: $email, secret: $secret) {
      uuid
    }
  }
`;

export const SET_PASSWORD = gql`
  mutation setUserPassword($userId: String!, $password: String!) {
    setUserPassword(id: $userId, password: $password)
  }
`;
