import { gql, useQuery } from "@apollo/client";

export const GET_ROOM_BY_ID = gql`
  query roomByID($id: String!) {
    roomByID(id: $id) {
      roomData {
        id
        name
        timeLimit
        voteOptions
      }
      code
      success
      message
    }
  }
`;
