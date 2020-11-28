const { gql } = require('apollo-server');

const UserType = gql`
  # Comments in GraphQL strings (such as this one) start with
  # the hash (#) symbol.
  # ID (serialized as a String): A unique identifier that's
  # often used to refetch an object or as the key for a cache.
  # Although it's serialized as a String, an ID is not intended
  # to be human‐readable.

  type User {
    "Full name of user"
    name: String!
    "Email address of user"
    email: String!
    "a unique id"
    id: ID!
  }
`;

const UserMutationResponse = gql`
  type UpdateUserEmailMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    user: User
  }

  type UpdateUserNameMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    user: User
  }

  type DeleteUserMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type AddUserMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    user: User
  }
`;

const NewUserInput = gql`
  input NewUserInput {
    "Full name of user"
    name: String
    "Email of user"
    email: String
  }
`;

module.exports = gql`
  ${UserType}
  ${UserMutationResponse}
  ${NewUserInput}
`;
