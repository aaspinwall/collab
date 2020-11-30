const UsersQuery = require("./users/users.query");
const UsersResolver = require("./users/users.resolver");
const RoomsQuery = require("./rooms/rooms.query");
const RoomsResolver = require("./rooms/rooms.resolver");
const TestQuery = require("./test.query");
const CustomersQuery = require("./customers.query");

const resolvers = {
  Query: {
    ...UsersQuery,
    ...TestQuery,
    ...CustomersQuery,
    ...RoomsQuery,
  },

  Mutation: {
    ...UsersResolver,
    ...RoomsResolver,
  },
};

module.exports = resolvers;
