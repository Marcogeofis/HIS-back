const Joi = require('joi');

const id = Joi.number().integer();
const level = Joi.string();
const cost = Joi.number().integer();
const classSpecial = Joi.number().integer();

const createCourseSchema = Joi.object({
  level: level.required(),
  cost: cost.required(),
  classSpecial: classSpecial.required(),
});

const updateCourseSchema = Joi.object({
  level: level,
  cost: cost,
  classSpecial: classSpecial,
});

const getCourseSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCourseSchema, updateCourseSchema, getCourseSchema }
