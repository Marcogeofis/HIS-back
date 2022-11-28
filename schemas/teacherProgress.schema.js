const Joi = require('joi');

const id = Joi.number().integer();
const teacherId = Joi.number().integer();
const attitude = Joi.string();
const communication = Joi.string();
const patient = Joi.string();
const suggestion = Joi.string();


const createTeacherProgressSchema = Joi.object({
  teacherId: teacherId.required(),
  attitude: attitude.required(),
  communication: communication.required(),
  patient: patient.required(),
  suggestion: suggestion.required(),
});

const updateTeacherProgressSchema = Joi.object({
  teacherId: teacherId,
  attitude: attitude,
  communication: communication,
  patient: patient,
  suggestion: suggestion,
});

const getTeacherProgressSchema = Joi.object({
  id: id.required(),
});

module.exports = { getTeacherProgressSchema, updateTeacherProgressSchema, createTeacherProgressSchema}
