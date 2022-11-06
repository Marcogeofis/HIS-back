const Joi = require('joi');

const id = Joi.string();
const studentMail = Joi.string();
const chapter = Joi.string().max(200);
const video = Joi.string();
const audio = Joi.string();

const createHworkSchema = Joi.object({
  id: id.required(),
  studentMail: studentMail.required(),
  chapter: chapter.required(),
  video: video.required(),
  audio: audio.required(),
});

const updateHworkSchema = Joi.object({
  studentMail: studentMail,
  chapter: chapter,
  video: video,
  audio: audio,
});

const getHworkSchema = Joi.object({
  id: id.required(),
})
//
module.exports = { getHworkSchema, createHworkSchema, updateHworkSchema };
