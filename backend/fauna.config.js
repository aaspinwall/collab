require("dotenv").config();
const faunadb = require("faunadb");

module.exports = new faunadb.Client({
  secret: process.env.FAUNA_DB,
});