require('./config/config');

const express = require('express');
const { ObjectID } = require('mongodb');
const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');
const _ = require('lodash');
const bodyParser = require('body-parser');

// Setup Port
const port = process.env.PORT;

// Initializing express
const app = express();

// Setup body-parser module
app.use(express.json());

// Setting up routes
// Listening for POST Method
app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text,
    completed: req.body.completed || false,
    completedAt: req.body.completed || null
  });

  todo
    .save()
    .then(doc => {
      res.send(doc);
    })
    .catch(err => res.status(400).send(err));
});

app.get('/todos', (req, res) => {
  Todo.find()
    .then(todos => {
      res.send({ todos });
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.get('/todos/:id', (req, res) => {
  const { id } = req.params;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send('Enter a valid id');
  }

  Todo.findById(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).send('Todo not dound');
      }
      res.send({ todo });
    })
    .catch(err => {
      res.status(400).send('Error occurred');
    });
});

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({ todo });
    })
    .catch(err => {
      res.status(400).send();
    });
});

app.patch('/todos/:id', (req, res) => {
  const id = req.params.id;
  let body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  console.log(body.completed);
  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
    .then(todo => {
      if (!todo) {
        return res.status.status(404).send();
      }
      res.send({ todo });
    })
    .catch(err => {
      res.status(400).send();
    });
});

app.listen(port, () => {
  console.log(`Listening in port ${port}`);
});

module.exports = {
  app
};
