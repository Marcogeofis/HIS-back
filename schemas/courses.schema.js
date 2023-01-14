const Joi = require('joi');

const id = Joi.number().integer();
const tipoDeCurso = Joi.string();
const nivelBasico = Joi.string();
const costoBasico = Joi.number().integer();
const nivelIntermedio = Joi.string();
const costoIntermedio = Joi.number().integer();
const nivelAvanzado = Joi.string();
const costoAvanzado = Joi.number().integer();
const claseExtraordinaria = Joi.string();
const costoClaseExtra = Joi.number().integer();
const examenExtraordi = Joi.string();
const costoExamenExtraordi = Joi.number().integer();


const createCourseSchema = Joi.object({
  tipoDeCurso: tipoDeCurso.required(),
  nivelBasico: nivelBasico.required(),
  costoBasico: costoBasico.required(),
  nivelIntermedio: nivelIntermedio.required(),
  costoIntermedio: costoIntermedio.required(),
  nivelAvanzado: nivelAvanzado.required(),
  costoAvanzado: costoAvanzado.required(),
  claseExtraordinaria: claseExtraordinaria.required(),
  costoClaseExtra: costoClaseExtra.required(),
  examenExtraordi: examenExtraordi.required(),
  costoExamenExtraordi: costoExamenExtraordi.required(),
});

const updateCourseSchema = Joi.object({
  tipoDeCurso: tipoDeCurso,
  nivelBasico: nivelBasico,
  costoBasico: costoBasico,
  nivelIntermedio: nivelIntermedio,
  costoIntermedio: costoIntermedio,
  nivelAvanzado: nivelAvanzado,
  costoAvanzado: costoAvanzado,
  claseExtraordinaria: claseExtraordinaria,
  costoClaseExtra: costoClaseExtra,
  examenExtraordi: examenExtraordi,
  costoExamenExtraordi: costoExamenExtraordi,
});

const getCourseSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCourseSchema, updateCourseSchema, getCourseSchema }
