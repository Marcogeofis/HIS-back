const Joi = require('joi');

const id = Joi.number().integer();
const symbol = Joi.string();
const image = Joi.string();
const audio = Joi.string();
const example1 = Joi.string();
const example2 = Joi.string();
const example3 = Joi.string();
const example4 = Joi.string();
const context = Joi.string().max(350);
const offset = Joi.number().integer();
const limit = Joi.number().integer();

const createSoundSchema = Joi.object({
  symbol: symbol.required(),
  image: image.required(),
  audio: audio.required(),
  example1: example1.required(),
  example2: example2.required(),
  example3: example3.required(),
  example4: example4.required(),
  context: context.required(),
});

const updateSoundSchema = Joi.object({
  symbol,
  image,
  audio,
  example1,
  example2,
  example3,
  example4,
  context,
});

const getSoundSchema = Joi.object({
  id: id.required(),
});

const querySoundSchema = Joi.object({
  limit,
  offset,
});
module.exports = { createSoundSchema, updateSoundSchema, getSoundSchema, querySoundSchema };
