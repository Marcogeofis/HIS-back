const Joi = require('joi');

const id = Joi.string();
const tegusto = Joi.string();
const queGustoMas = Joi.string();
const queNoGusto = Joi.string();
const suggestions = Joi.string();
const meRecomiendas = Joi.string();


const createAppBBSchema = Joi.object({
  id: id.required(),
  tegusto: tegusto.required(),
  queGustoMas: queGustoMas.required(),
  queNoGusto: queNoGusto.required(),
  suggestions: suggestions.required(),
  meRecomiendas: meRecomiendas.required(),
});

const updateAppBBSchema = Joi.object({
  tegusto: tegusto,
  queGustoMas: queGustoMas,
  queNoGusto: queNoGusto,
  suggestions: suggestions,
  meRecomiendas: meRecomiendas,
});

const getAppBBSchema = Joi.object({
  id: id.required(),
});

module.exports = { getAppBBSchema, updateAppBBSchema, createAppBBSchema };
