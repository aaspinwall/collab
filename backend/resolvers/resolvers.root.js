const UsersQuery = require("./voters/voters.query");
const UsersResolver = require("./voters/voters.resolver");
const RoomsQuery = require("./rooms/rooms.query");
const RoomsResolver = require("./rooms/rooms.resolver");

const resolvers = {
  Query: {
    ...UsersQuery,
    ...RoomsQuery,
  },

  Mutation: {
    ...UsersResolver,
    ...RoomsResolver,
  },
};

module.exports = resolvers;
