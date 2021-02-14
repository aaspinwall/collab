const faunadb = require("faunadb");
const FaunaClient = require("../fauna.config");
const { votersToIterable, generateId } = require("../../utils/helpers");
const { VOTER_VOTED } = require("../voters/voters.resolver");

const {
  Collection,
  Create,
  Delete,
  Get,
  Index,
  Match,
  Select,
  Update,
} = faunadb.query;

async function addRoom(_, { room: { name, timeLimit, voteOptions } }) {
  let success;
  let attempts = 0;
  const max_attempts = 5;
  while (!success && attempts < max_attempts) {
    try {
      attempts++;
      const id = generateId();

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
    } catch ({ description }) {
      if (description === "document is not unique.") {
        return {
          code: "400",
          success: false,
          message: "bad request: the id is not unique :(",
        };
      }
      return {
        code: "401",
        success: false,
        message: "there has been an error in the server :(",
      };
    }
  }
}

async function deleteRoom(_, { roomID }) {
  try {
    const { data } = await FaunaClient.query(
      Delete(Select("ref", Get(Match(Index("rooms_by_id"), roomID))))
    );

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
  } catch ({ description: message }) {
    return {
      code: "401",
      success: false,
      message,
    };
  }
}

async function addVoterToRoom(_, { voterData: { name }, roomID }) {
  try {
    const { data } = await FaunaClient.query(
      Update(Select("ref", Get(Match(Index("rooms_by_id"), roomID))), {
        data: {
          voters: {
            [name]: "String-Representation-Of-False",
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
    return {
      code: "401",
      success: false,
      message: "there has been an error in the server :(",
    };
  }
}

async function addVoterData(
  _,
  { voterData: { name, option }, roomID },
  { pubsub }
) {
  try {
    pubsub.publish(VOTER_VOTED, {
      voterVoted: {
        name,
        voteData: option,
      },
    });

    const { data } = await FaunaClient.query(
      Update(Select("ref", Get(Match(Index("rooms_by_id"), roomID))), {
        data: {
          voters: {
            [name]: option,
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
      option: option,
      voters: votersToIterable(data.voters),
    };
  } catch (err) {
    console.log("err in addVoterToRoom: ", err);
    return {
      code: "401",
      success: false,
      message: "there has been an error in the server :(",
    };
  }
}

module.exports = {
  addRoom,
  deleteRoom,
  addVoterToRoom,
  addVoterData,
};
