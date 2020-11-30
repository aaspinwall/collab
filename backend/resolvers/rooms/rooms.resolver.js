require("dotenv").config();
const rooms = require("./rooms.data");
const faunadb = require("faunadb");

const client = new faunadb.Client({
  secret: process.env.FAUNA_DB,
});
const { Create, Collection } = faunadb.query;

const RoomsResolver = {
  //the second argument is what's passed by the query
  async addRoom(_, args) {
    const {
      room: { name, timeLimit },
    } = args;
    console.log(name, timeLimit);

    const response = await client.query(
      Create(Collection("rooms"), { data: { name, timeLimit } })
    );

    return {
      code: "200",
      success: true,
      message: "room added",
      room: {
        name: response.data.name,
        id: response.ref.id,
        timeLimit: response.data.timeLimit,
      },
    };
  },
};

module.exports = RoomsResolver;
