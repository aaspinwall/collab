const faunadb = require('faunadb');
const FaunaClient = require('../../fauna.config');
const users = require('./users.data');

const { Create, Collection } = faunadb.query;

let idIndex = 3;

async function addUser(_, args) {
  console.log({ args });
  const { user } = args;

  idIndex += 1;

  const newUser = {
    name: user.name,
    email: user.email,
    id: idIndex.toString(),
  };
  try {
    await FaunaClient.query(Create(Collection('users'), { data: newUser }));
  } catch (e) {
    console.log(e);
  }
  return {
    code: '200',
    success: true,
    message: 'user added',
    user: newUser,
  };
}

function updateUserEmail(_, args) {
  const foundUserIndex = users.findIndex((user) => user.id === args.id);

  if (foundUserIndex > -1) {
    const newUser = { ...users[foundUserIndex] };
    newUser.email = args.email;
    return {
      code: '200',
      success: true,
      message: 'user updates',
      user: newUser,
    };
  }
  return {
    code: '404',
    success: false,
    message: 'user not found',
  };
}

function updateUserName(_, args) {
  const foundUserIndex = users.findIndex((user) => user.id === args.id);

  if (foundUserIndex > -1) {
    const newUser = { ...users[foundUserIndex] };
    newUser.email = args.name;
    return {
      code: '200',
      success: true,
      message: 'user updates',
      user: newUser,
    };
  }
  return {
    code: '404',
    success: false,
    message: 'user not found',
  };
}

function deleteUser(_, args) {
  const foundUserIndex = users.findIndex((user) => user.id === args.id);

  if (foundUserIndex > -1) {
    users.splice(foundUserIndex, 1);
    return {
      code: '200',
      success: true,
      message: 'user removed',
    };
  }
  return {
    code: '404',
    success: false,
    message: 'user not found',
  };
}

module.exports = {
  addUser,
  updateUserName,
  updateUserEmail,
  deleteUser,
};
