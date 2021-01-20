const graphqlTestCall = require("../../tests/graphqlTestCall");

const addVoterMutation = `
  mutation AddVoterToRoomMutation($name: String!, $roomID: String!) {
    addVoterToRoom(voterData: { name: $name }, roomID: $roomID) {
      roomData {
        id
        name
        timeLimit
        voteOptions
      }
      voters {
        name
        voteData
      }
      code
      success
      message
    }
  }
`;

describe("Voters Resolvers", () => {
  it("adds a new voter", async () => {
    const {
      data: {
        addVoterToRoom: {
          roomData: { id, name: roomName, timeLimit, voteOptions },
          voters,
          code,
          success,
        },
      },
    } = await graphqlTestCall(addVoterMutation, {
      name: "Alright",
      roomID: "EAR2",
    });

    const addedVoter = voters.find((voter) => voter.name === "Alright");

    expect(code).toEqual("200");
    expect(success).toBe(true);

    expect(roomName).toEqual("Christmas Room");
    expect(id).toEqual("EAR2");
    expect(timeLimit).toEqual("444");
    expect(voteOptions).toEqual(["D", "C", "B", "A"]);

    expect(addedVoter.name).toEqual("Alright");
    expect(addedVoter.voteData).toEqual("String-Representation-Of-False");
  });
});
