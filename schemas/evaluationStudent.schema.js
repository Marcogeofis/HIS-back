const Joi = require('joi');

const id = Joi.string();
const degree = Joi.string();
const studentMail =	Joi.string().max(100);
const Listening = Joi.number().integer();
const Speaking = Joi.number().integer();
const Reading = Joi.number().integer();
const Writing = Joi.number().integer();
const Participación = Joi.number().integer();
const Homeworks = Joi.number().integer();
const Status = Joi.string().max(100);

const createEvaluationStudentSchema = Joi.object({
  id: id.required(),
  degree: degree.required(),
  studentMail: studentMail.required(),
  Listening: Listening.required(),
  Speaking: Speaking.required(),
  Reading: Reading.required(),
  Writing: Writing.required(),
  Participación: Participación.required(),
  Homeworks: Homeworks.required(),
  Status: Status.required(),
});

const updateEvaluationStudentSchema = Joi.object({
  Listening: Listening,
  Speaking: Speaking,
  Reading: Reading,
  Writing: Writing,
  Participación: Participación,
  Homeworks: Homeworks,
  Status: Status,
});

const getEvaluationStudentSchema = Joi.object({
  id: id.required(),
});

module.exports = { createEvaluationStudentSchema, updateEvaluationStudentSchema, getEvaluationStudentSchema }
