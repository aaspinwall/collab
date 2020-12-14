// Check this file... resolvers.root doesn't exist

const { graphql } = require("graphql");
const { makeExecutableSchema } = require("graphql-tools");

const typeDefs = require("../routes/schema.root.js");

const resolvers = require("../routes/resolvers.root.js");

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = async function graphqlTestCall(query, variables) {
  return graphql(schema, query, undefined, {}, variables);
};
