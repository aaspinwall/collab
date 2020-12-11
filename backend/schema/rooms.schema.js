const { gql } = require("apollo-server");

const RoomType = gql`
  # Comments in GraphQL strings (such as this one) start with
  # the hash (#) symbol.
  # ID (serialized as a String): A unique identifier that's
  # often used to refetch an object or as the key for a cache.
  # Although it's serialized as a String, an ID is not intended
  # to be human‐readable.

  type Room {
    "Room name"
    name: String!
    "Time limit"
    timeLimit: String!
    "a unique id"
    id: String!
    "Voting Options"
    voteOptions: [String!]
  }
`;

const RoomMutationResponse = gql`
  type AddRoomMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    room: Room
  }
`;

const NewRoomInput = gql`
  input NewRoomInput {
    "Name of the room"
    name: String!
    "Time limit"
    timeLimit: String!
    id: String!
    voteOptions: [String!]
  }
`;

const NewUserToRoomInput = gql`
  input NewUserToRoomInput {
    name: String!
  }
`;

const UserInRoom = gql`
  type UserInRoom {
    name: String!
    voteData: Boolean!
  }
`

const UserToRoomMutationResponse = gql`
  type AddUserToRoomMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    roomData: Room
    userData: [UserInRoom]!
  }
`;


module.exports = gql`
  ${RoomType}
  ${RoomMutationResponse}
  ${NewRoomInput}
  ${NewUserToRoomInput}
  ${UserInRoom}
  ${UserToRoomMutationResponse}
`;
