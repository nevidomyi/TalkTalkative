const Joi = require('joi');

const userValidation = (obj) => {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    contact_info: Joi.string().max(200),
    avatar: Joi.string(),
    status: Joi.number(),
    id: Joi.string(),
  });
  return schema.validate(obj);
};

module.exports = userValidation;
