const Joi = require('joi');

const id = Joi.number().integer();
const course = Joi.string().max(50);
const section = Joi.string().max(100);
const chapter = Joi.string().max(150);
const video = Joi.string();
const point1 = Joi.string();
const point2 = Joi.string();
const point3 = Joi.string();
const point4 = Joi.string();
const point5 = Joi.string();
const context = Joi.string().max(500);
const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createIntermediateClassSchema = Joi.object({
  course: course.required(),
  section: section.required(),
  chapter: chapter.required(),
  video: video.required(),
  point1: point1.required(),
  point2: point2.required(),
  point3: point3.required(),
  point4: point4.required(),
  point5: point5.required(),
  context: context.required(),
});

const updateIntermediateClassSchema = Joi.object({
  id,
  course,
  section,
  chapter,
  video,
  point1,
  point2,
  point3,
  point4,
  point5,
  context,
});

const getIntermediateClassSchema = Joi.object({
  id: id.required(),
});

const queryIntermediateClassSchema = Joi.object({
  limit,
  offset,
});

module.exports = { getIntermediateClassSchema, updateIntermediateClassSchema, createIntermediateClassSchema, queryIntermediateClassSchema };
