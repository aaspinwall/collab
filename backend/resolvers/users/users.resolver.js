const users = require('./users.data');

let idIndex = 3;

const UsersResolver = {
  addUser(_, args) {
    console.log({ args });
    const user = args.user;

    idIndex ++;

    const newUser = {
      name: user.name,
      email: user.email,
      id: (idIndex).toString(),
    }

    console.log({ newUser });
    users.push(newUser)

    return {
      code: '200',
      success: true,
      message: 'user added',
      user: newUser,
    }
  },

  updateUserEmail(_, args) {
    const foundUserIndex = users.findIndex(user => user.id === args.id);

    if (foundUserIndex > -1) {
      const newUser = {...users[foundUserIndex]}
      newUser.email = args.email;
      return {
        code: '200',
        success: true,
        message: 'user updates',
        user: newUser
      }
    } else {
      return {
        code: '404',
        success: false,
        message: 'user not found',
      }
    }
  },

  updateUserName(_, args) {
    const foundUserIndex = users.findIndex(user => user.id === args.id);

    if (foundUserIndex > -1) {
      const newUser = { ...users[foundUserIndex] }
      newUser.email = args.name;
      return {
        code: '200',
        success: true,
        message: 'user updates',
        user: newUser
      }
    } else {
      return {
        code: '404',
        success: false,
        message: 'user not found',
      }
    }
  },

  deleteUser(_, args) {
    console.log('args',args)
    const foundUserIndex = users.findIndex(user => user.id === args.id);
    if (foundUserIndex > -1) {
      users.splice(foundUserIndex, 1)
      return {
        code: '200',
        success: true,
        message: 'user removed'
      }
    } else {
      return {
        code: '404',
        success: false,
        message: 'user not found',
      }
    }
  },
};

module.exports = UsersResolver;
