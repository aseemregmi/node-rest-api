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

    // deleteMany
    // db.collection('Todos')
    //   .deleteMany({ text: 'Eat lunch' })
    //   .then(result => {
    //     console.log(result);
    //   });

    // deleteOne
    // db.collection('Todos')
    //   .deleteOne({ text: 'Eat lunch' })
    //   .then(res => {
    //     console.log(res);
    //   });

    // findOneAndDelete
    // db.collection('Todos')
    //   .findOneAndDelete({ completed: false })
    //   .then(res => {
    //     console.log(res);
    //   });

    // findOneAndDeleteMany
    db.collection('Users')
      .findOneAndDelete({ _id: new ObjectID('5b8963c799dbb4ef2ca22d38') })
      .then(result => {
        console.log('Deleted', result);
      });

    // client.close();
  }
);
