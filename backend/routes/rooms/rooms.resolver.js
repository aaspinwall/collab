const faunadb = require('faunadb');
const FaunaClient = require('../../fauna.config');

// TODO
// MAKKKE DA FOOD 🥓
// MAKKE DA CODE BETTER
// TOGGLE DA VOTE
// MAKKE DA FAUNAFUNK

const {
  Create, Collection, Get, Index, Match, Select, Update,
} = faunadb.query;

async function addRoom(_, args) {
  const {
    room: {
      name, timeLimit, id, voteOptions,
    },
  } = args;

  const { data } = await FaunaClient.query(
    Create(Collection('rooms'), {
      data: {
        name,
        timeLimit,
        id,
        voteOptions,
      },
    }),
  );

  return {
    code: '200',
    success: true,
    message: 'room added',
    room: {
      name: data.name,
      id: data.id,
      timeLimit: data.timeLimit,
      voteOptions: data.voteOptions,
    },
  };
}

// This will have to change as currently there is no
// way to query Voters using GraphQL (that I can see at least)
async function addVoterToRoom(_, { voterData: { name }, roomId }) {
  const { data } = await FaunaClient.query(
    Update(
      Select('ref', Get(Match(Index("rooms_by_id"), roomId))),
      {
        data: {
          voters: {
            [name]: false,
          }
        }
      }
    )
  );

  const voters = Object.entries(data.voters).map(([name, voteData]) => {
    return {
      name,
      voteData
    }
  });

  return {
    code: '200',
    success: true,
    message: 'room updated',
    roomData: {
      id: data.id,
      name: data.name,
      timeLimit: data.timeLimit,
      voteOptions: data.voteOptions,
    },
    voters,
  }
}

module.exports = {
  addRoom,
  addVoterToRoom,
};
