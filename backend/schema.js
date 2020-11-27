const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLSchema,
} = require("graphql");

const TestType = new GraphQLObjectType({
  name: "Test",
  fields: () => ({
    test_field: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    test: {
      type: TestType,
      resolve() {
        return { test_field: "Cool beans!" };
      },
    },
    repeat: {
      type: TestType,
      args: {
        word: { type: GraphQLString },
      },
      resolve(_, { word }) {
        return { test_field: word.split("").reverse().join("") };
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
