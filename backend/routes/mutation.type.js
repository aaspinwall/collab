const { gql } = require('apollo-server');

const MutationType = gql`
  "All the Mutations we can do"
  type Mutation {
    """
    POST: accepts {name: string, timeLimit: string, id: string}
    returns a Room type
    """
    addRoom(room: NewRoomInput): AddRoomMutationResponse

    """
    POST: accepts {name: string}, roomId: string
    returns a Room type
    """
    addVoterToRoom(voterData: NewVoterToRoomInput, roomId: String!): AddVoterToRoomMutationResponse
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
