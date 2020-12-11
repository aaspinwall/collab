const UsersQuery = require("./users/users.query");
const UsersResolver = require("./users/users.resolver");
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
