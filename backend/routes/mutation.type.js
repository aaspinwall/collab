const { gql } = require("apollo-server");

const MutationType = gql`
  "All the Mutations we can do"
  type Mutation {
    addRoom(room: AddRoomInput): AddRoomMutationResponse


    addVoterToRoom(
      voterData: AddVoterToRoomInput
      roomID: String!
    ): AddVoterToRoomMutationResponse
  }
`;

const ResponseType = gql`
  interface Response {
    code: String!
    success: Boolean!
    message: String!
  }
`;

module.exports = gql`
  ${MutationType}
  ${ResponseType}
`;
