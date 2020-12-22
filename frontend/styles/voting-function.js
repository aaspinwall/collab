const CountTheVotes = (choicesObject) => {
  const votingResult = {};
  const tiedChoices = [];
  let tied = false;

  // iterate through object and switch array for it's length
  Object.keys(choicesObject).map((choice) => {
    choicesObject[choice] = choicesObject[choice].length;
  });

  // create array with keys sorted
  const sortedVotes = Object.keys(choicesObject).sort((a, b) => {
    return choicesObject[b] - choicesObject[a];
  });

  // look for equality and add them to tiedArray
  for (i = 0; i < sortedVotes.length; i++) {
    if (choicesObject[sortedVotes[i]] === choicesObject[sortedVotes[i + 1]]) {
      tied = true;
      tiedChoices.push(sortedVotes[i + 1]);
    }
  }

  // add results to object
  votingResult.ranked = sortedVotes;
  votingResult.winner = sortedVotes[0];
  votingResult.tied = tied;

  // add tied results
  if (tied) {
    tiedChoices.unshift(sortedVotes[0]);
    votingResult.tiedChoices = tiedChoices;
    votingResult.winner = "Tie";
  }

  console.log(votingResult);
  return votingResult;
};

const obj = {
  a: [1, 2, 3, 4, 5],
  b: [1, 2, 3],
  c: [1, 2, 3, 4, 5],
  d: [1],
};
const obj2 = {
  a: [1, 2, 3, 4, 5, 6, 7, 8],
  b: [1, 2, 3],
  c: [1, 2, 3, 4, 5],
  d: [1],
};

CountTheVotes(obj);
CountTheVotes(obj2);
