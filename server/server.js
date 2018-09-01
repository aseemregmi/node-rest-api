const express = require('express');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

// Setup Port
const port = process.env.PORT || 3000;

// Initializing express
const app = express();

// Setup body-parser module
app.use(express.json());

// Setting up routes
// Listening for POST Method
app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo
    .save()
    .then(doc => {
      res.send(doc);
    })
    .catch(err => res.status(400).send(err));
});

app.listen(port, () => {
  console.log(`Listening in port ${port}`);
});
