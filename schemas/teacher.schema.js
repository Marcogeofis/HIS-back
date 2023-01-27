const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(5).max(150);
const lastName = Joi.string().min(5).max(150);
const email = Joi.string().email();
const clases = Joi.number().integer();
const start = Joi.string();
const end = Joi.string();
const offset = Joi.number().integer();
const limit = Joi.number().integer();

const createTeacherSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  email: email.required(),
  clases: clases.required(),
  start: start.required(),
  end: end.required(),

});

const updateTeacherSchema = Joi.object({
  name: name,
  lastName: lastName,
  email: email,
  clases: clases,
  start: start,
  end: end,

});

const getTeacherSchema = Joi.object({
  id: id.required(),
});

const queryTeacherSchema = Joi.object({
  limit,
  offset,
  email
});

module.exports = { createTeacherSchema, updateTeacherSchema, getTeacherSchema, queryTeacherSchema }
