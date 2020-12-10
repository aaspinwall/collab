## GraphQL

- First spin up the development server `htpp://localhost:4000`
- Play with the queries to see what's what:

### Our Query Resolvers

**get all users**:

```javascript
query {
  users {
    name
    email
    id
  }
}
```

### Our Mutation Resolvers

**`add user` returns a response object**:

```javascript
  mutation {
    addUser(user: {name: "ANY_NAME", email: "ANY_EMAIL"}){
      user {
        name
        email
        id
      }
    }
    code
    success
    message
  }
```

**`update email` returns a response object**:

```javascript
   mutation {
     updateUserEmail(id: "1", email: "NEW_EMAIL"){
       user {
         name
         email
         id
       }
       code
       success
       message
     }
   }
```

**`update name` returns a response object**:

```javascript
   mutation {
     updateUserName(id: "1", name: "NEW_NAME"){
       user {
         name
         email
         id
       }
       code
       success
       message
     }
   }
```

**`delete user` returns a response object**:

```javascript
 mutation{
   deleteUser(id: "1"){
     success
     code
     message
   }
 }
```

**`create a room` returns a response object**:

```javascript
mutation {
  addRoom(room: { name: "Thanksgiving!", timeLimit: "2020/11/21", id: "EAR2", voteOptions: ["apple", "pears", "plums", "table"] }){
    code
    success
    message
    room {
      name
      timeLimit
      id
      voteOptions
    }
  }
}
```

**`add a user to a room` returns a response object with the users in the room and the room data**:

```javascript
mutation {
  addUserToRoom(userData: { name: "Sir Frekerik! the four"}, roomID: "EE202"){
    code
    success
    message
    roomData {
      id
      name
      timeLimit
    }
    users {
      [name]
    }
  }
}
```