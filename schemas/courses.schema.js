const Joi = require('joi');

const id = Joi.string();
const nivel = Joi.string();
const costo = Joi.number().integer();
const isBlock = Joi.boolean();


const createCourseSchema = Joi.object({
  id: id.required(),
  nivel: nivel.required(),
  costo: costo.required(),
  isBlock: isBlock.required(),
});

const updateCourseSchema = Joi.object({
  nivel: nivel,
  costo: costo,
  isBlock: isBlock,
});

const getCourseSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCourseSchema, updateCourseSchema, getCourseSchema }
