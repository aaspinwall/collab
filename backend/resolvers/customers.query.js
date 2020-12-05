
const FaunaClient = require('../fauna.config');
const faunadb = require("faunadb");

const { Get, Index, Match } = faunadb.query;

// Dark JavaScript Magic
// Declaring a function inside an Object:
// async customers() {...}
// is the same as:
// customers: async function customers() {...}

const CustomersQuery = {
  async customers() {
    const { data: customerData } = await FaunaClient.query(
      Get(Match(Index("all_customers")))
    );

    return customerData;
  },
};

module.exports = CustomersQuery;
