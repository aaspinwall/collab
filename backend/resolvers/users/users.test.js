const graphqlTestCall = require('../../tests/graphqlTestCall');

const addUserMutation = `
  mutation AddUserMutation($name: String!, $email: String!) {
    addUser(user: { name: $name, email: $email }) {
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
`;

describe('Users Resolvers', () => {
  it('adds a new user', async () => {
    const {
      data: {
        addUser: {
          user: { name, email },
          code,
          success,
        },
      },
    } = await graphqlTestCall(addUserMutation, {
      name: 'Alright',
      email: 'freddy@notkreuger.com',
    });

    expect(code).toEqual('200');
    expect(success).toBe(true);
    expect(name).toEqual('Alright');
    expect(email).toEqual('freddy@notkreuger.com');
  });
});
