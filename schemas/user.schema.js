const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(5).max(150);
const age = Joi.number().integer();
const email = Joi.string().max(50);
const password = Joi.string().min(8);


const createUserSchema = Joi.object({
  name: name.required(),
  age: age.required(),
  email: email.required(),
  password: password.required(),
});


const updateUserSchema = Joi.object({
  name: name,
  age: age,
  email: email,
})

const getUserSchema = Joi.object({
  id: id.required(),
});


module.exports = { createUserSchema, updateUserSchema, getUserSchema }

