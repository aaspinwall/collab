const { graphql } = require('graphql');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = require('../schema/schema.root');
const resolvers = require('../resolvers/resolvers.root');

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = async function graphqlTestCall(query, variables) {
  return graphql(schema, query, undefined, {}, variables);
};
