const { gql } = require('apollo-server');

const Voter = gql`
  type Voter {
    name: String!
    voteData: Boolean!
  }
`;

module.exports = Voter;
