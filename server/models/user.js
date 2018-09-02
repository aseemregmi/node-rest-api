const mongoose = require('mongoose');

let User = mongoose.model('Users', {
  email: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
});

module.exports = {
  User
};