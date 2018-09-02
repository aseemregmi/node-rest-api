const request = require('supertest');
const expect = require('expect');

const app = require('../server').app;
const { Todo } = require('../models/todo');

const todos = [
  {
    text: 'FIrst test todo'
  },
  {
    text: 'Second test todo'
  }
];

beforeEach(done => {
  Todo.remove({})
    .then(() => {
      return Todo.insertMany(todos);
    })
    .then(() => done());
});

describe('POST / todos', () => {
  it('should create a new todo', done => {
    let text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({ text: text })
      .expect(200)
      .expect(res => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find()
          .then(todos => {
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
            done();
          })
          .catch(err => done(err));
      });
  });

  it('should not create a todo', done => {
    let text = 'Test todo text';

    request(app)
      .post('/todos')
      .send()
      .expect(400)
      .expect(res => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find()
          .then(todos => {
            expect(todos.length).toBe(0);
            done();
          })
          .catch(err => done(err));
      });
  });
});
