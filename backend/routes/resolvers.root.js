const RoomsQuery = require('./rooms/rooms.query');
const RoomsResolver = require('./rooms/rooms.resolver');

const resolvers = {
  Query: {
    ...RoomsQuery,
  },

  Mutation: {
    ...RoomsResolver,
  },
};

module.exports = resolvers;
