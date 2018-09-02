const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove()

// Todo.remove({}).then(result => {
//   console.log(result);
// });

Todo.findOneAndDelete({
  text: 'How do you do'
}).then(todo => {
  console.log(todo);
  mongoose.connection.close();
});

// Todo.findByIdAndRemove('5b8b9d4b99dbb4ef2ca2561a').then(todo => {
//   console.log(todo);
// });
