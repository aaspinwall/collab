const { gql } = require("apollo-server");

const MutationType = gql`
  "All the Mutations we can do"
  type Mutation {
    addRoom(room: AddRoomInput): RoomMutationResponse

    deleteRoom(roomID: String!): RoomMutationResponse

    addVoterToRoom(
      voterData: AddVoterToRoomInput
      roomID: String!
    ): AddVoterToRoomMutationResponse

    addVoterData(
      voterData: AddVoterDataInput
      roomID: String!
    ): AddVoterDataMutationResponse
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
