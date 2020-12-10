const { gql } = require("apollo-server");

const MutationType = gql`
  "All the Mutations we can do"
  type Mutation {
    """
    POST: accepts {name: string, email: string}
    returns a User type
    """
    addUser(user: NewUserInput): AddUserMutationResponse

    """
    POST: accepts {name: string, timeLimit: string, id: string}
    returns a Room type
    """
    addRoom(room: NewRoomInput): AddRoomMutationResponse

    """
    POST: accepts {name: string}, roomID: string
    returns a Room type
    """
    addUserToRoom(userData: NewUserToRoomInput, roomID: String!): AddUserToRoomMutationResponse

    """
    DELETE: accepts ID
    returns boolean of success
    """
    deleteUser(id: ID!): DeleteUserMutationResponse

    """
    UPDATE: accepts ID, and new email
    returns User
    """
    updateUserEmail(id: ID!, email: String!): UpdateUserEmailMutationResponse

    """
    UPDATE: accepts ID, and new name
    returns User
    """
    updateUserName(id: ID!, name: String!): UpdateUserNameMutationResponse
  }
`;

const MutationResponseType = gql`
  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }
`;

module.exports = gql`
  ${MutationType}
  ${MutationResponseType}
`;
