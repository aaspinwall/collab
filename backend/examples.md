## GraphQL

- First spin up the development server `htpp://localhost:4000`
- Play with the queries to see what's what:

### Our Query Resolvers

**`retrieve room data with id` returns room data**

```javascript
query {
  roomByID(id: "EAR2") {
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
```

### Our Mutation Resolvers

**`create a room` returns a response object**:

```javascript
mutation {
  addRoom(room: { name: "Thanksgiving!", timeLimit: "2020/11/21", id: "EAR2", voteOptions: ["apple", "pears", "plums", "table"] }){
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
```

**`add a voter to a room` returns a response object with the voters in the room and the room data**:

```javascript
mutation {
  addVoterToRoom(voterData: { name: "Sir Frekerik! the four"}, roomID: "EAR2"){
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
```
