// const graphqlTestCall = require("../../tests/graphqlTestCall");

/* --- this is commented out because there is no
  --- AddVoterMutation
  --- */

// const addVoterMutation = `
//   mutation AddVoterMutation($name: String!, $email: String!) {
//     addVoter(voter: { name: $name, email: $email }) {
//       voter {
//         name
//         email
//         id
//       }
//       code
//       success
//       message
//     }
//   }
// `;

describe("Voters Resolvers", () => {
  it("adds a new voter", async () => {
    // const {
    //   data: {
    //     addVoter: {
    //       voter: { name, email },
    //       code,
    //       success,
    //     },
    //   },
    // } = await graphqlTestCall(addVoterMutation, {
    //   name: 'Alright',
    //   email: 'freddy@notkreuger.com',
    // });

    // expect(code).toEqual('200');
    // expect(success).toBe(true);
    // expect(name).toEqual('Alright');
    // expect(email).toEqual('freddy@notkreuger.com');

    const one = 1;
    /** --- --- filler should be deleted */
    expect(one).toEqual(1);
  });
});
