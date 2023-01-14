const Joi = require('joi');

const id = Joi.number().integer();
const nivel = Joi.string();
const seccion = Joi.string();
const teacherId = Joi.number().integer();
const teacherName = Joi.string();
const periodo = Joi.string();
const clasesEnVivo = Joi.string();
const horario = Joi.string();
const dayExam = Joi.string();
const hourExam = Joi.string();


const createClassSchema = Joi.object({
  nivel: nivel.required(),
  seccion: seccion.required(),
  teacherId: teacherId.required(),
  teacherName: teacherName.required(),
  periodo: periodo.required(),
  clasesEnVivo: clasesEnVivo.required(),
  horario: horario.required(),
  dayExam: dayExam.required(),
  hourExam: hourExam.required(),
});

const updateClassSchema = Joi.object({
  nivel: nivel,
  seccion: seccion,
  teacherId: teacherId,
  teacherName: teacherName,
  periodo: periodo,
  clasesEnVivo: clasesEnVivo,
  horario: horario,
  dayExam: dayExam,
  hourExam: hourExam,
});

const getClassSchema = Joi.object({
  id: id.required(),
});

module.exports = { getClassSchema, updateClassSchema, createClassSchema };
