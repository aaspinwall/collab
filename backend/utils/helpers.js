const generateId = () => {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return Array.from(
    { length: 4 },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
};

function votersToIterable(votersData) {
  return Object.entries(votersData).map(([voterName, voteData]) => ({
    name: voterName,
    voteData,
  }));
}

module.exports = {
  generateId,
  votersToIterable,
};
