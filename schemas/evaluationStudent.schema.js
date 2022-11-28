const Joi = require('joi');

const id = Joi.number().integer();
const degree = Joi.string();
const studentId =	Joi.number().integer();
const listening = Joi.number().integer();
const speaking = Joi.number().integer();
const reading = Joi.number().integer();
const writing = Joi.number().integer();
const participation = Joi.number().integer();
const homeworks = Joi.number().integer();
const status = Joi.string().max(100);

const createEvaluationStudentSchema = Joi.object({
  degree: degree.required(),
  studentId: studentId.required(),
  listening: listening.required(),
  speaking: speaking.required(),
  reading: reading.required(),
  writing: writing.required(),
  participation: participation.required(),
  homeworks: homeworks.required(),
  status: status.required(),
});

const updateEvaluationStudentSchema = Joi.object({
  listening: listening,
  speaking: speaking,
  reading: reading,
  writing: writing,
  participation: participation,
  homeworks: homeworks,
  status: status,
});

const getEvaluationStudentSchema = Joi.object({
  id: id.required(),
});

module.exports = { createEvaluationStudentSchema, updateEvaluationStudentSchema, getEvaluationStudentSchema }
