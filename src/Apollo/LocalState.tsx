import { Resolvers } from "apollo-client/core/types";

interface defaultTypes {
  isLoggedIn: boolean;
}

export const defaults = {
  isLoggedIn: localStorage.getItem("token") !== null
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
    }
  }
};
