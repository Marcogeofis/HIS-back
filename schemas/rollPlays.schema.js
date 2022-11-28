const Joi = require('joi');

const id = Joi.number().integer();
const course = Joi.string();
const section = Joi.string();
const topic = Joi.string();
const audio = Joi.string();
const context = Joi.string();
const limit = Joi.number().integer();
const offset = Joi.number().integer();


const createRollPlaySchema = Joi.object({
  course: course.required(),
  section: section.required(),
  topic: topic.required(),
  audio: audio.required(),
  context: context.required(),
});

const updateRollPlaySchema = Joi.object({
  course: course,
  section: section,
  topic: topic,
  audio: audio,
  context: context,
});

const getRollPlaySchema = Joi.object({
  id: id.required(),
});

const queryRollPlaySchema = Joi.object({
  limit,
  offset,
  topic,
});

module.exports = { createRollPlaySchema, updateRollPlaySchema, getRollPlaySchema, queryRollPlaySchema};
