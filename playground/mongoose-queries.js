const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = `5b8b760c68fe4345b810fd5f123`;

// if (!ObjectID.isValid(id)) {
//   console.log(`ID not valid`);
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   // console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo:', todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log('Id not found');
//     }
//     console.log('Todo By Id: ', todo);
//   })
//   .catch(err => {
//     console.log(err);
//   });

const id = `5b8a2b086a1d3b36d45f05c2`;

User.findById(id)
  .then(user => {
    if (!user) {
      return console.log(`User with id ${id} not found`);
    }
    console.log('User found : ', user);
  })
  .catch(err => {
    console.log(err);
  });
