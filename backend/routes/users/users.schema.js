const { gql } = require("apollo-server");

const User = gql`
  type User {
    name: String!
    voteData: Boolean!
  }
`;

module.exports = User;
