const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MoongoDB Server');

    const db = client.db('TodoApp');

    // db.collection('Todos')
    //   .findOneAndUpdate(
    //     {
    //       _id: new ObjectID('5b8933d3d10b5d1cf460e354')
    //     },
    //     {
    //       $set: {
    //         completed: false
    //       }
    //     },
    //     {
    //       returnOriginal: false
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   });

    db.collection('Users')
      .findOneAndUpdate(
        {
          _id: new ObjectID('5b8935b3c090f63e307e822d')
        },
        {
          $set: {
            name: 'Aseem Regmi'
          },
          $inc: {
            age: -23
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => {
        console.log(result);
      });

    // client.close();
  }
);
