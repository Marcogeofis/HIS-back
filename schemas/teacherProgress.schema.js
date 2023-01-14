const Joi = require('joi');

const id = Joi.number().integer();
const teacher = Joi.string();
const curso = Joi.string();
const calificacion = Joi.number().integer();
const mejoras = Joi.string();



const createTeacherProgressSchema = Joi.object({
  teacher: teacher.required(),
  curso: curso.required(),
  calificacion: calificacion.required(),
  mejoras: mejoras.required(),
});

const updateTeacherProgressSchema = Joi.object({
  teacher: teacher,
  curso: curso,
  calificacion: calificacion,
  mejoras: mejoras,
});

const getTeacherProgressSchema = Joi.object({
  id: id.required(),
});

module.exports = { getTeacherProgressSchema, updateTeacherProgressSchema, createTeacherProgressSchema}
