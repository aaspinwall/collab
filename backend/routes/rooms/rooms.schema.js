const { gql } = require("apollo-server");

const RoomType = gql`
  type Room {
    "Room name"
    name: String!

    "Time limit"
    timeLimit: String!

    "a unique roomId"
    id: String!

    "Voting Options"
    voteOptions: [String!]

    "Voters in room, hasVoted?"
    voters: [Voter!]
  }
`;

const RoomByIDResponse = gql`
  type RoomByIDResponse implements Response {
    roomData: Room
    voters: [Voter]!
    code: String!
    success: Boolean!
    message: String!
  }
`;

const AddRoomInput = gql`
  input AddRoomInput {
    "Name of the room"
    name: String!

    "Time limit"
    timeLimit: String!

    id: String!
    voteOptions: [String!]
  }
`;

const AddRoomMutationResponse = gql`
  type AddRoomMutationResponse implements Response {
    code: String!
    success: Boolean!
    message: String!
    room: Room
  }
`;

const AddVoterToRoomInput = gql`
  input AddVoterToRoomInput {
    name: String!
  }
`;

const AddVoterToRoomMutationResponse = gql`
  type AddVoterToRoomMutationResponse implements Response {
    roomData: Room!
    voters: [Voter]!
    code: String!
    success: Boolean!
    message: String!
  }

  
`;

const AddVoterDataInput = gql`
  input AddVoterDataInput {
    name: String!
    option: String!
  }
`;

const AddVoterDataMutationResponse = gql`
  type AddVoterDataMutationResponse implements Response {
    roomData: Room!
    voters: [Voter]!
    code: String!
    success: Boolean!
    message: String!
    option: String!
  }`

module.exports = gql`
  ${RoomType}
  ${RoomByIDResponse}
  ${AddRoomInput}
  ${AddRoomMutationResponse}
  ${AddVoterToRoomInput}
  ${AddVoterToRoomMutationResponse}
  ${AddVoterDataInput}
  ${AddVoterDataMutationResponse}
`;
