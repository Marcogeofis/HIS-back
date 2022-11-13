const Joi = require('joi');

const id = Joi.number().integer();
const level = Joi.string();
const cost = Joi.number().integer();
const isBlock = Joi.boolean();
const id_discount = Joi.number().integer();


const createCourseSchema = Joi.object({
  level: level.required(),
  cost: cost.required(),
  isBlock: isBlock.required(),
  id_discount: id_discount.required(),
});

const updateCourseSchema = Joi.object({
  level: level,
  cost: cost,
  isBlock: isBlock,
});

const getCourseSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCourseSchema, updateCourseSchema, getCourseSchema }
