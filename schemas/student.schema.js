const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(5).max(150);
const lastName = Joi.string().min(5).max(150);
const email = Joi.string().email();
const password = Joi.string().min(8);
const age = Joi.number().integer();
const phone = Joi.string();
const goal = Joi.string();
const userId = Joi.number().integer();
const offset = Joi.number().integer();
const limit = Joi.number().integer();


const createStudentSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required(),
  }),
});


const updateStudentSchema = Joi.object({
  name: name,
  lastName: lastName,
  password: password,
  age: age,
  phone: phone,
  goal: goal,
  userId: userId,
})

const getStudentSchema = Joi.object({
  id: id.required(),
});

const queryStudentSchema = Joi.object({
  limit,
  offset,
  lastName,
})


module.exports = { createStudentSchema, updateStudentSchema, getStudentSchema, queryStudentSchema };

