const { gql } = require('apollo-server');

const CustomersType = gql`
  type Address {
    street: String!
    city: String!
    state: String!
    zipCode: String!
  }

  type CreditCard {
    network: String!
    number: String!
  }

  type Customers {
    firstName: String!
    lastName: String!
    address: Address
    creditCard: CreditCard
  }
`;

module.exports = CustomersType;
