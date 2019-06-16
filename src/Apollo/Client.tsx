import ApolloClient, { gql } from "apollo-boost";
import { defaults, resolvers } from "./LocalState";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.REACT_APP_API_URL || "http://10.0.1.19:3006",
  clientState: {
    defaults,
    resolvers
  },
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`
  }
});

export default client;
