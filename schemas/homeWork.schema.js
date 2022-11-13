const Joi = require('joi');

const id = Joi.number().integer();
const name =	Joi.string().max(100);
const studentMail = Joi.string().max(100);
const chapter = Joi.string().max(200);
const video = Joi.string();
const audio = Joi.string();

const createHworkSchema = Joi.object({
  name: name.required(),
  studentMail: studentMail.required(),
  chapter: chapter.required(),
  video: video.required(),
  audio: audio.required(),
});

const updateHworkSchema = Joi.object({
  name: name,
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
