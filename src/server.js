import { GraphQlServer } from "graphql-yoga";

const server = new GraphQlServer({
  typeDefs
});

server.start();
