const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  # ID (serialized as a String): A unique identifier that's often used to refetch an object or as the key for a cache. Although it's serialized as a String, an ID is not intended to be human‐readable.
  "the type of a user"
  type User {
    "Full name of user"
    name: String!
    "Email address of user"
    email: String!
    "a unique id"
    id: ID!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. 
  "All the queries we can do"
  type Query {
    "Get all users"
    users: [User]
    "a test function, returns 'cool beans!'"
    test: String
    """
    a test function
    accept a 'word' string variable
    return the same string, reversed
    """
    repeat (word: String) : String
  }

  "All the Mutations we can do"
  type Mutation {
    """
    POST: accepts {name: string, email: string}
    returns a User type
    """
    addUser(user: NewUserInput): AddUserMutationResponse
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

  input NewUserInput {
    "Full name of user"
    name: String
    "Email of user"
    email: String
  }

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

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

const users = [
  {
    name: "test1",
    email: "email1",
  },
  {
    name: "test2",
    email: "email2",
  },
]

const resolvers = {
  Query: {
    users: () => users,
    test() {
      return 'cool beans!'
    },
    repeat(parent, args, context, info) {
      return args.word.split("").reverse().join("")
    }
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
