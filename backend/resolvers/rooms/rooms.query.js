require("dotenv").config();
const rooms = require("./rooms.data");
const faunadb = require("faunadb");

const client = new faunadb.Client({
  secret: process.env.FAUNA_DB,
});
const { Get, Ref, Collection } = faunadb.query;

const RoomsQuery = {
  rooms: () => rooms,
  //CAREFUL! the first argument is empty
  //the second argument is what's passed by the query
  async roomByID(_, args) {
    const {
      data: result,
      ref: { id },
    } = await client.query(Get(Ref(Collection("rooms"), args.id)));
    console.log(result);
    //queries expect an iterable object, that's why we return an array
    return [{ ...result, id }];
  },
};

module.exports = RoomsQuery;
