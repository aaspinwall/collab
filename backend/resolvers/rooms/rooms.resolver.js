const FaunaClient = require("../../fauna.config");
const faunadb = require("faunadb");

// TODO
// MAKKKE DA FOOD 🥓
// MAKKE DA CODE BETTER
// TOGGLE DA VOTE
// MAKKE DA FAUNAFUNK

const {
  Create,
  Collection,
  Get,
  Index,
  Match,
  Select,
  Update,
} = faunadb.query;

async function addRoom(_, args) {
  const {
    room: {
      name,
      timeLimit,
      id,
      voteOptions
    },
  } = args;

  const { data } = await FaunaClient.query(
    Create(Collection("rooms"), { data: { name, timeLimit, id, voteOptions } })
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
}

// This will have to change as currently there is no
// way to query users using GraphQL (that I can see at least)
async function addUserToRoom(_, { userData: { name }, roomID }) {
  const { data } = await FaunaClient.query(
    Update(
      Select('ref', Get(Match(Index("rooms_by_id"), roomID))),
      {
        data: {
          users: {
            [name]: false,
          }
        }
      }
    )
  );

  const userData = Object.entries(data.users).map(([name, voteData]) => {
    return {
      name,
      voteData
    }
  });

  console.log(userData, 'HELLOOOOOOOOOOOOOOOOOOO')

  return {
    code: "200",
    success: true,
    message: "room updated",
    roomData: {
      id: data.roomID,
      name: data.name,
      timeLimit: data.timeLimit,
    },
    userData,
  }
}

module.exports = {
  addRoom,
  addUserToRoom,
};
