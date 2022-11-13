const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().max(100);
const teacherMail = Joi.string().max(100);
const hrs = Joi.number().integer();
const start = Joi.string();
const end = Joi.string();
const period = Joi.string();


const createScheduleSchema = Joi.object({
  name: name.required(),
  teacherMail: teacherMail.required(),
  hrs: hrs.required(),
  start: start.required(),
  end: end.required(),
  period: period.required(),
});

const updateScheduleSchema = Joi.object({
  name: name,
  teacherMail: teacherMail,
  hrs: hrs,
  start: start,
  end: end,
  period: period,
});

const getScheduleSchema = Joi.object({
  id: id.required(),
});

module.exports = { createScheduleSchema, updateScheduleSchema, getScheduleSchema }
