const VOTER_VOTED = "VOTER_VOTED";

module.exports = {
  VOTER_VOTED,
  VotersResolver: {
    voterVoted: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(VOTER_VOTED),
    },
  },
};
