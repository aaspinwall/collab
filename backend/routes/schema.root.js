const { gql } = require("apollo-server");
const QueryType = require("./query.type");
const MutationType = require("./mutation.type");
const RoomsSchema = require("./rooms/rooms.schema");
const VotersSchema = require("./voters/voters.schema");

module.exports = gql`
  ${QueryType}
  ${MutationType}
  ${RoomsSchema}
  ${VotersSchema}
`;
