import { gql } from "@apollo/client";

export const VOTER_VOTED = gql`
  subscription {
    voterVoted {
      name
      voteData
    }
  }
`;
