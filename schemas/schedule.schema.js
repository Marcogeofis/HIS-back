const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const teacherId = Joi.number().integer();
const hrs = Joi.number().integer();
const start = Joi.string();
const end = Joi.string();


const createScheduleSchema = Joi.object({
  name: name.required(),
  teacherId: teacherId.required(),
  hrs: hrs.required(),
  start: start.required(),
  end: end.required(),
});

const updateScheduleSchema = Joi.object({
  name: name,
  teacherId: teacherId,
  hrs: hrs,
  start: start,
  end: end,
});

const getScheduleSchema = Joi.object({
  id: id.required(),
});

module.exports = { createScheduleSchema, updateScheduleSchema, getScheduleSchema }
