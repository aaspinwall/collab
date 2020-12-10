import { gql, useMutation } from "@apollo/client";

export default gql`
  mutation AddRoom(
    $name: String!
    $id: String!
    $timeLimit: String!
    $voteOptions: [String!]
  ) {
    addRoom(
      room: {
        name: $name
        id: $id
        timeLimit: $timeLimit
        voteOptions: $voteOptions
      }
    ) {
      room {
        name
        id
        timeLimit
        voteOptions
      }
      code
      success
      message
    }
  }
`;
