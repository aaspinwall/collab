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

export const GET_RESULTS = gql`
  query roomResults($id: String!) {
    roomByID(id: $id) {
      roomData {
        id
        name
        timeLimit
        voteOptions
        voters {
          name
          voteData
        }
      }
      code
      success
      message
    }
  }
`;

export const ADD_VOTER_DATA = gql`
  mutation addVoterData($id: String!, $name: String!, $option: String!) {
    addVoterData(voterData: { name: $name, option: $option }, roomID: $id) {
      roomData {
        id
        name
        timeLimit
        voteOptions
        voters {
          name
          voteData
        }
      }
      option
      code
      success
      message
    }
  }
`;
