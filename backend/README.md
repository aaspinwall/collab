## Backend

### Getting started

- First, install the dependencies: `yarn install`
- Then, start the development server: `yarn dev`

Open [http://localhost:4000/](http://localhost:4000/) to start testing out GraphQL queries!

![https://i.ibb.co/8M0RPrv/playground.png](https://i.ibb.co/8M0RPrv/playground.png)

### [schema.js](https://github.com/aaspinwall/collab/blob/main/backend/schema/schema.root.js)

Our GraphQL schema can be found here! In this file we create strongly typed queries. The root
schema is where we connect all the different schema types together.

When we want to make a query, we must respect the typing defined in this schema.

### [resolvers.js](https://github.com/aaspinwall/collab/blob/main/backend/resolvers/resolvers.root.js)

This works similarly to how an express endpoint wold work. When given some query, perform some action and return what was asked.

The resolvers also include **mutations**, which manipulate the requested data.

## [server.js](https://github.com/aaspinwall/collab/blob/main/backend/server.js)

This file holds the Apollo server, made following [this tutorial](https://www.apollographql.com/docs/apollo-server/schema/schema/). It brings everything together (our schema and resolvers) and serves it up for querying!

## GraphQL

- First spin up the development server!
- Play with the queries to see what's what:
  - Go to playground `http://localhost:4000/`
  - queries:
    - `get all users`:
    ```javascript
    query {
      users {
        name
        email
        id
      }
    }
    ```
    - `print 'cool beans!'`:
    ```javascript
      query {
        test
      }
    ```
    - `print sdrawkcab`:
    ```javascript
      query {
        reverse (word: "ANY_WORD_YOU_WANT")
      }
    ```
  - mutations:
    - `add user` returns a response object:
    ```javascript
      mutation {
        addUser(user: {name: "ANY_NAME", email: "ANY_EMAIL"}){
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
    - `update email` returns a response object:
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
    - `update name` returns a response object:
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
    - `delete user` returns a response object:
    ```javascript
     mutation{
       deleteUser(id: "1"){
         success
         code
         message
       }
     }
    ```

## Contributing

Ready to contribute? To get started, spin up the development server and try out a query in the playground. We're all new to GraphQL, so try out creating your own query for practice!

### Next Up

The next things to do will be:

- Setup FaunaDB
- Setup a proper query to retrieve data from FaunaDB
