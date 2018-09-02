const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://aseemregmi:aseemregmi123@ds143242.mlab.com:43242/todoapp',
  { useNewUrlParser: true }
);

module.exports = {
  mongoose
};
