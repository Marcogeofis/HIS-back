const Joi = require('joi');

const id = Joi.number().integer();
const course = Joi.string();
const section = Joi.string();
const chapter = Joi.string();
const audio1 = Joi.string();
const audio2 = Joi.string();
const audio3 = Joi.string();
const audio4 = Joi.string();
const audio5 = Joi.string();
const context = Joi.string();
const limit = Joi.number().integer();
const offset = Joi.number().integer();


const createRollPlaySchema = Joi.object({
  course: course.required(),
  section: section.required(),
  chapter: chapter.required(),
  audio1: audio1.required(),
  audio2: audio2.required(),
  audio3: audio3.required(),
  audio4: audio4.required(),
  audio5: audio5.required(),
  context: context.required(),
});

const updateRollPlaySchema = Joi.object({
  course: course,
  section: section,
  chapter: chapter,
  audio1: audio1,
  audio2: audio2,
  audio3: audio3,
  audio4: audio4,
  audio5: audio5,
  context: context,
});

const getRollPlaySchema = Joi.object({
  id: id.required(),
});

const queryRollPlaySchema = Joi.object({
  limit,
  offset,
  chapter,
});

module.exports = { createRollPlaySchema, updateRollPlaySchema, getRollPlaySchema, queryRollPlaySchema};
