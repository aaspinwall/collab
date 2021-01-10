const graphqlTestCall = require("../../tests/graphqlTestCall");

const addRoomMutation = `
  mutation addRoomMutation($name: String!, $timeLimit: String!, $id: String!, $voteOptions: [String!]) {
    addRoom(room: {name: $name, timeLimit: $timeLimit, id: $id, voteOptions: $voteOptions}) {
  room {
      name
      timeLimit
      id
      voteOptions
    }
    code
    success
    message
  }
}
`;

const roomByIdQuery = `
  query roomByIdQuery($id: String!) {
    roomByID(id: $id) {
      roomData {
        name
        timeLimit,
        id,
        voteOptions
      }
      code
      success
      message
    }
  }
`;

describe("Rooms Resolvers", () => {
  it("adds a room", async () => {
    const {
      data: {
        addRoom: { room, code, success },
      },
    } = await graphqlTestCall(addRoomMutation, {
      name: "Thanksgiving!",
      timeLimit: "2020/11/21",
      id: "EAR2",
      voteOptions: ["apple", "pears", "plums", "table"],
    });
    expect(code).toEqual("200");
    expect(success).toBe(true);

    expect(room.name).toEqual("Thanksgiving!");
    expect(room.id).not.toBeNull();
    expect(room.voteOptions).toEqual(["apple", "pears", "plums", "table"]);
  });
});

describe("Room Query", () => {
  it("Returns room information for an existing room", async () => {
    const {
      data: {
        addRoom: {
          room: { id },
        },
      },
    } = await graphqlTestCall(addRoomMutation, {
      name: "CoolRoom",
      timeLimit: "2020/11/21",
      id: "EAR2",
      voteOptions: ["apple", "pears", "plums", "table"],
    });

    const {
      data: {
        roomByID: { roomData, code, success },
      },
    } = await graphqlTestCall(roomByIdQuery, { id: id });
    expect(code).toEqual("200");
    expect(success).toBe(true);

    expect(roomData.name).toEqual("CoolRoom");
    expect(roomData.voteOptions).toEqual(["apple", "pears", "plums", "table"]);
    expect(roomData.id).toEqual(id);
  });

  it("Returns undefined for an inexisting room", async () => {
    const {
      data: {
        roomByID: { code, success },
      },
    } = await graphqlTestCall(roomByIdQuery, { id: "AAAA" });

    expect(code).not.toBe("200");
    expect(success).toBe(false);
  });
});
