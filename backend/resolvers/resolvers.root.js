const UsersQuery = require('./users/users.query');
const UsersResolver = require('./users/users.resolver');
const TestQuery = require('./test.query');
const CustomersQuery = require('./customers.query');

const resolvers = {
  Query: {
    ...UsersQuery,
    ...TestQuery,
    ...CustomersQuery,
  },

  Mutation: {
    ...UsersResolver,
  }
};

module.exports = resolvers;
