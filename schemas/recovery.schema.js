const Joi = require('joi');

const token = Joi.string();
const password = Joi.string();

const recoverySchema = Joi.object({
  token: token.required(),
  password: password.required(),
});


module.exports = { recoverySchema };
