import { gql, useQuery } from "@apollo/client";

export const DELETE_VOTING_ROOM = gql`
  mutation deleteRoom($id: String!) {
    deleteRoom(roomID: $id) {
      success
    }
  }
`;
