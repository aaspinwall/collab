## Backend

### Getting started


- First, install the dependencies: `yarn install`
- Then, start the development server: `yarn dev`

Open [http://localhost:4000/graphql](http://localhost:4000/graphql) to start testing out GraphQL queries!

### [server.js](https://github.com/aaspinwall/collab/blob/main/backend/server.js)
Here we use express combined with express-graphql to serve up our single endpoint `/graphql`. This endpoint connects our GraphQL schema.

The endpoint is also connected with GraphiQL, which provides a UI to make and view queries<br><br>
![GraphiQL](https://i.ibb.co/rMfqZFM/graphql.png)

### [schema.js](https://github.com/aaspinwall/collab/blob/main/backend/schema.js)
Our GraphQL schema can be found here! In this file we create strongly typed queries that can be returned when requested.

This works similarly to how an express endpoint wold work. When given some query, perform some action and return what was asked.

## [index.js](https://github.com/aaspinwall/collab/blob/main/backend/index.js) 
this file holds the Apollo server, made following [this tutorial](https://www.apollographql.com/docs/apollo-server/schema/schema/).

how to run:
 - make sure you `yarn install` the new dependencies
 - `yarn dev`
 - play with the queries to see what's what:
     - go to playground `http://localhost:4000/`
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
            repeat (word: "ANY_WORD_YOU_WANT")
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
        
## Contributing
Ready to contribute? To get started, spin up the development server and try out a query in GraphiQL. We're all new to GraphQL, so try out creating your own query for practice!

### GraphQL

I followed this tutorial: https://www.youtube.com/watch?v=SEMTj8w04Z8 for setting up GraphQL. The setup right now is basically a cut and copy of express-graphql's github setup: https://github.com/graphql/express-graphql.

I put up two schema's to test out how they work. To try them out:
- Spin up the development server
- There are two queries setup:
    - The first takes the query:
```bash
{
  test {
    test_field
  }
}
```
and just returns 'Cool beans!'<br><br>

  - The second takes a query with any word you so choose:
```bash
{
  repeat(word: "word") {
    test_field
  }
}
```
and reverses your word!

### Next Up

The next things to do will be:
- Setup Apollo server. To do this you can try following the second video in the GraphQL tutorial above ☝️
- Setup FaunaDB
- Setup a proper query to retrieve data from FaunaDB
