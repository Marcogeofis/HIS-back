const Joi = require('joi');

const id = Joi.number().integer();
const degree = Joi.string();
const gradeSection = Joi.string();
const teacherId = Joi.number().integer();
const studentId = Joi.number().integer();
const day = Joi.string();
const classBegins = Joi.string();
const classEnds = Joi.string();


const createClassSchema = Joi.object({
  degree: degree.required(),
  gradeSection: gradeSection.required(),
  teacherId: teacherId.required(),
  studentId: studentId.required(),
  day: day.required(),
  classBegins: classBegins.required(),
  classEnds: classEnds.required(),
});

const updateClassSchema = Joi.object({
  degree: degree,
  gradeSection: gradeSection,
  teacherId: teacherId,
  studentId: studentId,
  day: day,
  classBegins: classBegins,
  classEnds: classEnds,
});

const getClassSchema = Joi.object({
  id: id.required(),
});

module.exports = { getClassSchema, updateClassSchema, createClassSchema };
