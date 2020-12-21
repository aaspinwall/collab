const faunadb = require("faunadb");
const FaunaClient = require("../fauna.config");
const { votersToIterable } = require("../../utils/helpers");

const { Get, Match, Index } = faunadb.query;

const RoomsQuery = {
  async roomByID(_, { id }) {
    try {
      const { data } = await FaunaClient.query(
        Get(Match(Index("rooms_by_id"), id))
      );

      return {
        code: "200",
        success: true,
        message: "room retrieved",
        roomData: {
          id: data.id,
          name: data.name,
          timeLimit: data.timeLimit,
          voteOptions: data.voteOptions,
        },
        voters: votersToIterable(data.voters) || [],
      };
    } catch (err) {
      console.log("err in getting room by Id:", err);
      return {
        code: "500",
        success: false,
        message: "there has been an error in the server :(",
      };
    }
  },
};

module.exports = RoomsQuery;
