## Backend

### Getting started

- First, install the dependencies: `yarn install`
- Then, start the development server: `yarn dev`

Open [http://localhost:4000/](http://localhost:4000/) to start testing out GraphQL queries!

![https://i.ibb.co/8M0RPrv/playground.png](https://i.ibb.co/8M0RPrv/playground.png)

### Backend Structure

#### [server.js](https://github.com/aaspinwall/collab/blob/main/backend/server.js)

This file holds the Apollo server, made following [this tutorial](https://www.apollographql.com/docs/apollo-server/schema/schema/). It brings everything together (our schema and resolvers) and serves it up for querying!

#### [schema.js](https://github.com/aaspinwall/collab/blob/main/backend/schema/schema.root.js)

Our GraphQL schema can be found here! In this file we create type definitions for our queries. These type definitions tell us what fields are available for querying, as well as the type required for each field (number, string, boolean, etc.).

When we want to make a query, we must respect the typing defined in this schema.

[query.schema.js](https://github.com/aaspinwall/collab/blob/main/backend/schema/query.schema.js) and [mutation.schema.js](https://github.com/aaspinwall/collab/blob/main/backend/schema/mutation.schema.js) are also defined here. In order for a query or mutation to work, it must be included in the respective file.

#### [resolvers.js](https://github.com/aaspinwall/collab/blob/main/backend/resolvers/resolvers.root.js)

The resolvers works similarly to how an express endpoint wold work. When given some query, perform some action and return what was asked.

There are two types of resolvers:
- __query__: Query's simply return the requested data. For example, getting a user with a specified email address.
- __mutation__: Which _mutate_ (or change) the requested data. For example, a mutation might delete a specified user from the database.

### Contributing

Ready to contribute? To get started, spin up the development server and try out a query in the playground. We're all new to GraphQL, so try out creating your own resolvers and schema's for practice! Feel free to ping us in the collab community if you need help setting up!

### Next Up

The next things to do will be:

- Setup a query to create, update, and destroy data from FaunaDB
