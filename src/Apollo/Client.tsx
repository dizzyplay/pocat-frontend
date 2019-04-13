import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

const client = new ApolloClient({
  uri: "http://localhost:3001",
  clientState: {
    defaults,
    resolvers
  },
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`
  }
});

export default client;
