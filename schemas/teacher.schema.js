const Joi = require('joi');

const id = Joi.string();
const nombre = Joi.string().min(5).max(20);
const apellidoPaterno = Joi.string().min(5).max(20);
const apellidoMaterno = Joi.string().min(5).max(20);
const email = Joi.string().max(50);
const password = Joi.string().max(50);

const createTeacherSchema = Joi.object({
  id: id.required(),
  nombre: nombre.required(),
  apellidoPaterno: apellidoPaterno.required(),
  apellidoMaterno: apellidoMaterno.required(),
  email: email.required(),
  password: password.required(),
});

const updateTeacherSchema = Joi.object({
  nombre: nombre,
  apellidoPaterno: apellidoPaterno,
  apellidoMaterno: apellidoMaterno,
  password: password,
});

const getTeacherSchema = Joi.object({
  id: id.required(),
});

module.exports = { createTeacherSchema, updateTeacherSchema, getTeacherSchema }
