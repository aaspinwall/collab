const faunadb = require("faunadb");
const FaunaClient = require("../fauna.config");
const { votersToIterable, generateId } = require("../../utils/helpers");

// TODO
// MAKKKE DA FOOD 🥓
// MAKKE DA CODE BETTER
// TOGGLE DA VOTE
// MAKKE DA FAUNAFUNK

const { Create, Collection, Get, Index, Match, Select, Update } = faunadb.query;

async function addRoom(_, args) {
  const {
    room: { name, timeLimit, voteOptions },
  } = args;
  console.log(name);
  let success;
  let attempts = 0;
  const max_attempts = 5;
  while (!success && attempts < max_attempts) {
    try {
      attempts++;
      const id = generateId();
      console.log(id);
      const { data } = await FaunaClient.query(
        Create(Collection("rooms"), {
          data: {
            name,
            timeLimit,
            id,
            voteOptions,
          },
        })
      );
      success = true;
      return {
        code: "200",
        success: true,
        message: "room added",
        room: {
          name: data.name,
          id: data.id,
          timeLimit: data.timeLimit,
          voteOptions: data.voteOptions,
        },
      };
    } catch (err) {
      console.log("err in addRoom: ", err.description);
      if (err.description === "document is not unique.") {
        return {
          code: "400",
          success: false,
          message: "bad request: the id is not unique :(",
        };
      }
      return {
        code: "500",
        success: false,
        message: "there has been an error in the server :(",
      };
    }
  }
}

async function addVoterToRoom(_, { voterData: { name }, roomID }) {
  try {
    const { data } = await FaunaClient.query(
      Update(Select("ref", Get(Match(Index("rooms_by_id"), roomID))), {
        data: {
          voters: {
            [name]: false,
          },
        },
      })
    );

    return {
      code: "200",
      success: true,
      message: "room updated",
      roomData: {
        id: data.id,
        name: data.name,
        timeLimit: data.timeLimit,
        voteOptions: data.voteOptions,
      },
      voters: votersToIterable(data.voters),
    };
  } catch (err) {
    console.log("err in addVoterToRoom: ", err);
    return {
      code: "500",
      success: false,
      message: "there has been an error in the server :(",
    };
  }
}

module.exports = {
  addRoom,
  addVoterToRoom,
};
