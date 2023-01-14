const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(5).max(150);
const lastName = Joi.string().min(5).max(150);
const phone = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(8);
const userId = Joi.number().integer();
const contract = Joi.string();
const endContract = Joi.string();
const offset = Joi.number().integer();
const limit = Joi.number().integer();

const createTeacherSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required(),
  }),
});

const updateTeacherSchema = Joi.object({
  name: name,
  lastName: lastName,
  phone: phone,
  userId: userId,
  contract: contract,
  endContract: endContract,
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
