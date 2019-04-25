import { Resolvers } from "apollo-client/core/types";
import { gql } from "apollo-boost";

interface defaultTypes {
  isLoggedIn: boolean;
  current_cat_uuid: string | null;
}

export const defaults: defaultTypes = {
  isLoggedIn: localStorage.getItem("token") !== null,
  current_cat_uuid: null
};

export const resolvers: Resolvers = {
  Mutation: {
    userLogin: (_, { token }, { cache }) => {
      localStorage.setItem("token", token);
      cache.writeData({
        data: {
          isLoggedIn: true
        }
      });
      window.location.reload();
      return null;
    },
    userLogout: (_, __, { cache }) => {
      localStorage.removeItem("token");
      cache.writeData({
        data: {
          isLoggedIn: false
        }
      });
      window.location.href = "/";
      return null;
    },
    setCurrentCat: (_, { uuid }, { cache }) => {
      cache.writeData({ data: { current_cat_uuid: uuid } });
      return uuid;
    }
  },
  Query: {}
};
