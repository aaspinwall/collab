const { gql } = require('apollo-server');
const UserSchema = require('./users.schema');
const QuerySchema = require('./query.schema');
const MutationSchema = require('./mutation.schema');
const CustomersSchema = require('./customers.schema');
const RoomsSchema = require('./rooms.schema');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

module.exports = gql`
  ${QuerySchema}
  ${MutationSchema}
  ${UserSchema}
  ${RoomsSchema}
  ${CustomersSchema}
`;
