## Backend

### Getting started
_Instructions to run the server in your local machine_
ideally we want `yarn dev` 

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


### [server.js](https://github.com/aaspinwall/collab/blob/main/backend/server.js)
_what is this file and what does it do?_

### [schema.js](https://github.com/aaspinwall/collab/blob/main/backend/schema.js)
_what is this file and what does it do?_

## Contributing
_If someone wanted to collaborate, what should they know beforehand?_
