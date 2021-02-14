const { ApolloServer, PubSub } = require("apollo-server");
const typeDefs = require("./routes/schema.root");
const resolvers = require("./routes/resolvers.root");

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ pubsub }),
});

server.listen({ path: "graphql", port: 4000 }).then(({ url, ...meh }) => {
  console.log(`🚀  Server ready at ${url}graphql`);
});
