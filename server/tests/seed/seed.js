const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');
const { Todo } = require('../../models/todo');
const { User } = require('../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [
  {
    _id: userOneId,
    email: 'aseem.regmi22@gmail.com',
    password: 'hello123',
    tokens: [
      {
        access: 'auth',
        token: jwt.sign({ _id: userOneId, access: 'auth' }, 'abc123').toString()
      }
    ]
  },
  {
    _id: userTwoId,
    email: 'jen@ex.com',
    password: 'hello456'
  }
];

const todos = [
  {
    _id: new ObjectID(),
    text: 'First test todo'
  },
  {
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 3242342
  }
];

const removeExistingTodos = done => {
  Todo.remove({}).then(() => {
    done();
  });
};
const addNewTodos = done => {
  Todo.insertMany(todos).then(() => {
    done();
  });
};
const removeExistingUsers = done => {
  return User.remove({}).then(() => {
    done();
  });
};
const addNewUsers = done => {
  let userOne = new User(users[0]).save();
  let userTwo = new User(users[1]).save();

  Promise.all([userOne, userTwo])
    .then(() => {
      done();
    })
    .catch(() => done());
};

module.exports = {
  todos,
  removeExistingTodos,
  addNewTodos,
  removeExistingUsers,
  addNewUsers,
  users
};
