const { gql } = require('apollo-server');
const QueryType = require('./query.type');
const MutationType = require('./mutation.type');
const RoomsSchema = require('./rooms/rooms.schema');
const UsersSchema = require('./users/users.schema');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

module.exports = gql`
  ${QueryType}
  ${MutationType}
  ${RoomsSchema}
  ${UsersSchema}
`;
