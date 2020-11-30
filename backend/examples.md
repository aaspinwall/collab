## GraphQL

- First spin up the development server `htpp://localhost:4000`
- Play with the queries to see what's what:

### Our Query Resolvers

__get all users__:
```javascript
query {
  users {
    name
    email
    id
  }
}
```

__get all customers__:
```javascript
query {
	customers {
    firstName
    lastName
    address {
      street
      city
      state
      zipCode
    }
    creditCard {
      network
      number
    }
  }
}
```


__print 'cool beans!'__:
```javascript
  query {
    test
  }
```

__print sdrawkcab__:
```javascript
  query {
    reverse (word: "ANY_WORD_YOU_WANT")
  }
```

### Our Mutation Resolvers

__`add user` returns a response object__:
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

__`update email` returns a response object__:
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

__`update name` returns a response object__:
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

__`delete user` returns a response object__:
```javascript
 mutation{
   deleteUser(id: "1"){
     success
     code
     message
   }
 }
```
