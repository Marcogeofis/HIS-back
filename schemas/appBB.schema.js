const Joi = require('joi');

const id = Joi.number().integer();
const like = Joi.number().integer();
const nolike = Joi.number().integer();
const suggestions = Joi.string().max(500);
const meRecomiendas = Joi.string();


const createAppBBSchema = Joi.object({
  like: like.required(),
  nolike: nolike.required(),
  suggestions: suggestions.required(),
  meRecomiendas: meRecomiendas.required(),
});

const updateAppBBSchema = Joi.object({
  like: like,
  nolike: nolike,
  suggestions: suggestions,
  meRecomiendas: meRecomiendas,
});

const getAppBBSchema = Joi.object({
  id: id.required(),
});

module.exports = { getAppBBSchema, updateAppBBSchema, createAppBBSchema };
