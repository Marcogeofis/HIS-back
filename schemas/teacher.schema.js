const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().max(100);
const email = Joi.string().max(50);
const password = Joi.string().max(50);

const createTeacherSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
});

const updateTeacherSchema = Joi.object({
  name: name,
  password: password,
});

const getTeacherSchema = Joi.object({
  id: id.required(),
});

module.exports = { createTeacherSchema, updateTeacherSchema, getTeacherSchema }
