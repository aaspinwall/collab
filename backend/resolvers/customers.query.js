require("dotenv").config();
const faunadb = require("faunadb");

const { Get, Index, Match } = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNA_DB,
});

// Dark JavaScript Magic
// Declaring a function inside an Object:
// async customers() {...}
// is the same as:
// customers: async function customers() {...}

const CustomersQuery = {
  async customers() {
    const { data: customerData } = await client.query(
      Get(Match(Index("all_customers")))
    );

    return customerData;
  },
};

module.exports = CustomersQuery;
