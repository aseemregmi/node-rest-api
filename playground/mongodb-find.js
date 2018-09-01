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
    //   .find({ _id: new ObjectID('5b8933d3d10b5d1cf460e354') })
    //   .toArray()
    //   .then(docs => {
    //     console.log('Todos : ');
    //     console.log(JSON.stringify(docs, undefined, 2));
    //   })
    //   .catch(err => {
    //     console.log('Unable to fetch todos: ', err);
    //   });

    // db.collection('Todos')
    //   .find()
    //   .count()
    //   .then(count => {
    //     console.log(`Todos count : ${count}`);
    //   })
    //   .catch(err => {
    //     console.log('Unable to fetch todos: ', err);
    //   });

    db.collection('Users')
      .find({ name: 'Aseem Regmi' })
      .toArray()
      .then(docs => {
        console.log(`Users : `);
        console.log(JSON.stringify(docs, undefined, 2));
      })
      .catch(err => {
        console.log('Unable to fetch todos: ', err);
      });

    // client.close();
  }
);
