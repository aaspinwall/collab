const RoomsQuery = require("./rooms/rooms.query");
const RoomsResolver = require("./rooms/rooms.resolver");
const { VotersResolver } = require("./voters/voters.resolver");

const resolvers = {
  Query: {
    ...RoomsQuery,
  },

  Mutation: {
    ...RoomsResolver,
  },

  Subscription: {
    ...VotersResolver,
  },

  // to relieve the error
  // "Type ******  is missing a “__resolveType” resolver. Pass false into “resolverValidationOptions.requireResolversForResolveType” to disable this warning."
  Response: {
    __resolveType(Response, context, info) {
      return null;
    },
  },
};

module.exports = resolvers;
