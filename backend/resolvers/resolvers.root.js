const UsersQuery = require('./users/users.query');
const UsersResolver = require('./users/users.resolver');
const TestQuery = require('./test.query');

const resolvers = {
  Query: {
    ...UsersQuery,
    ...TestQuery
  },

  Mutation: {
    ...UsersResolver
  }
}

module.exports = resolvers
