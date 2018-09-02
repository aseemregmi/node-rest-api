const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const localAddress = `mongodb://localhost:27017/TodoApp`;
const mLabAddress = `mongodb://aseemregmi:aseemregmi123@ds143242.mlab.com:43242/todoapp`;

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true }
);

module.exports = {
  mongoose
};
