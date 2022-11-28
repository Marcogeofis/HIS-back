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
const context = Joi.string();
const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createLevelCourseSchema = Joi.object({
  course: course.required(),
  section: section.required(),
  chapter: chapter.required(),
  video: video.required(),
  context: context.required(),
});

const updateLevelCourseSchema = Joi.object({
  course: course,
  section: section,
  chapter: chapter,
  video: video,
  point1: point1,
  point2: point2,
  point3: point3,
  point4: point4,
  point5: point5,
  context: context,
});

const getLevelCourseSchema = Joi.object({
  id: id.required(),
});

const queryLevelCourseSchema = Joi.object({
  limit,
  offset,
  chapter,
});

module.exports = { createLevelCourseSchema, updateLevelCourseSchema, getLevelCourseSchema, queryLevelCourseSchema }
