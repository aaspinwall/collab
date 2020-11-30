const { gql } = require('apollo-server');

const QueryType = gql`
  # The "Query" type is special: it lists all of the available
  # queries that clients can execute, along with the return type
  # for each.

  "All the queries we can do"
  type Query {
    "Get all users"
    users: [User]
    customers: Customers

    "a test function, returns 'cool beans!'"
    test: String

    """
    a test function
    accept a 'word' string variable
    return the same string, reversed
    """
    reverse (word: String) : String
  }
`;

module.exports = QueryType;
