const mongoose = require('mongoose');
const { Schema } = mongoose;
const Joi = require('joi');

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

// validation by JOI

userScheme.methods.joiValidate = (obj) => {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
    // access_token: Joi.string().required,
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    contact_info: Joi.string().max(200),
    avatar: Joi.string(),
    created: Joi.date(),
    status: Joi.number()
  });
  return schema.validate(obj, userScheme);
};

module.exports = mongoose.model('User', userScheme);
