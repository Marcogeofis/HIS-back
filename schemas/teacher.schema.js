const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().max(100);
const lastName = Joi.string().max(100);
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string();
const offset = Joi.number().integer();
const limit = Joi.number().integer();

const createTeacherSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  email: email.required(),
  password: password.required(),
  role: role.required()
});

const updateTeacherSchema = Joi.object({
  name: name,
  lastName: lastName,
  password: password,
  role: role,
});

const getTeacherSchema = Joi.object({
  id: id.required(),
});

const queryTeacherSchema = Joi.object({
  limit,
  offset,
  lastName,
});

module.exports = { createTeacherSchema, updateTeacherSchema, getTeacherSchema, queryTeacherSchema }
