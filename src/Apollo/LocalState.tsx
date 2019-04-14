import { Resolvers } from "apollo-client/core/types";

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
      window.location.href = "/";
      return null;
    },
    setCurrentCat: (_, { uuid }, { cache }) => {
      cache.writeData({ data: { current_cat_uuid: uuid } });
      return null;
    }
  },
  Query: {
    getCurrentCat: (_, __, { cache, getCacheKey }) => {
      const uuid = getCacheKey({ __typename: "" });
      return { uuid: "testvalue" };
    }
  }
};
