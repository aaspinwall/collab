const { ApolloServer, PubSub } = require("apollo-server");
const typeDefs = require("./routes/schema.root");
const resolvers = require("./routes/resolvers.root");

const pubsub = new PubSub();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res, pubsub }),
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
