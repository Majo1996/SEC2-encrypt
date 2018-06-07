const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  message: {
    type: Object,
    required: true,
  },
});


const Users = mongoose.model('User', userSchema);

module.exports = Users;
