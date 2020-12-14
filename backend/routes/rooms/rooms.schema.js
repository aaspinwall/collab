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
    # we might need to have the voter
    # as an array, and not an object ¯_(ツ)_/¯
    # "Voters in room, hasVoted?"
    # voters: [Voter!]
  }
`;

const RoomMutationResponse = gql`
  type AddRoomMutationResponse implements Response {
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

const NewVoterToRoomInput = gql`
  input NewVoterToRoomInput {
    name: String!
  }
`;

const VoterToRoomMutationResponse = gql`
  type AddVoterToRoomMutationResponse implements Response {
    code: String!
    success: Boolean!
    message: String!
    roomData: Room!
    voters: [Voter]!
  }
`;

module.exports = gql`
  ${RoomType}
  ${RoomMutationResponse}
  ${NewRoomInput}
  ${NewVoterToRoomInput}
  ${VoterToRoomMutationResponse}
`;
