const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().max(100);
const teacherMail = Joi.string().max(100);
const actitud = Joi.string();
const comunication = Joi.string();
const patient = Joi.string();
const suggestion = Joi.string();


const createTeacherProgressSchema = Joi.object({
  name: name.required(),
  teacherMail: teacherMail.required(),
  actitud: actitud.required(),
  comunication: comunication.required(),
  patient: patient.required(),
  suggestion: suggestion.required(),
});

const updateTeacherProgressSchema = Joi.object({
  name: name,
  teacherMail: teacherMail,
  actitud: actitud,
  comunication: comunication,
  patient: patient,
  suggestion: suggestion,
});

const getTeacherProgressSchema = Joi.object({
  id: id.required(),
});

module.exports = { getTeacherProgressSchema, updateTeacherProgressSchema, createTeacherProgressSchema}
