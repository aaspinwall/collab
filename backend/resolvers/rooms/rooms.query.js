const faunadb = require('faunadb');
const FaunaClient = require('../../fauna.config');

const { Get, Ref, Collection } = faunadb.query;

const RoomsQuery = {
  // CAREFUL! the first argument is empty
  // the second argument is what's passed by the query
  async roomByID(_, args) {
    const {
      data: result,
      ref: { id },
    } = await FaunaClient.query(Get(Ref(Collection('rooms'), args.id)));
    // queries expect an iterable object, that's why we return an array
    return [{ ...result, id }];
  },
};

module.exports = RoomsQuery;
