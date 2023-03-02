const Joi = require('joi');

const userValidation = (obj) => {
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
  return schema.validate(obj);
};

module.exports = userValidation;
