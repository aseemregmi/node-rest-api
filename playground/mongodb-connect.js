const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  { useNewUrlParser: true },
  (err, client) => {
    const db = client.db('TodoApp');
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MoongoDB Server');

    // db.collection('Todos').insertOne(
    //   {
    //     text: 'SomeThing To Do',
    //     completed: false
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log('Unable to insert todo');
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    // Insert new doc into Users collection
    // {name, age, location}

    // db.collection('Users').insertOne(
    //   {
    //     name: 'Aseem Regmi',
    //     age: 19,
    //     location: 'Ghorahi, Dang'
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log('Unable to add a new User');
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    //   }
    // );

    // client.close();
  }
);
