const mongoose = require('mongoose');
const { Schema } = mongoose;

const userScheme = new Schema({
  username: String,
  password: String,
  email: String,
  contact_info: String,
  avatar: String,
  status: Number
},
{
  timestamps: true
});

module.exports = mongoose.model('User', userScheme);