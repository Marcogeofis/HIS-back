const Joi = require('joi');

const id = Joi.string();
const teacherMail = Joi.string().max(50);
const hrs = Joi.number().integer();
const start = Joi.string();
const end = Joi.string();
const period = Joi.string();


const createScheduleSchema = Joi.object({
  id: id.required(),
  teacherMail: teacherMail.required(),
  hrs: hrs.required(),
  start: start.required(),
  end: end.required(),
  period: period.required(),
});

const updateScheduleSchema = Joi.object({
  teacherMail: teacherMail.required(),
  hrs: hrs.required(),
  start: start.required(),
  end: end.required(),
  period: period.required(),
});

const getScheduleSchema = Joi.object({
  id: id.required(),
});

module.exports = { createScheduleSchema, updateScheduleSchema, getScheduleSchema }
