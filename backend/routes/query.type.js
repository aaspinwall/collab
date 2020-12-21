const { gql } = require("apollo-server");

const QueryType = gql`
  # The "Query" type is special: it lists all of the available
  # queries that clients can execute, along with the return type
  # for each.

  "All the queries we can do"
  type Query {
    "Get room by id"
    roomByID(id: String): RoomByIDResponse
  }
`;

module.exports = gql`
  ${QueryType}
`;
