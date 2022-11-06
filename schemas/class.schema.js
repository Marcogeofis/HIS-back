const Joi = require('joi');

const id = Joi.string();
const id_period = Joi.string();
const degree = Joi.string();
const gradeSection = Joi.string();
const teacherMail = Joi.string();
const studentMail = Joi.string();
const classBegins = Joi.string();
const classEnds = Joi.string();


const createClassSchema = Joi.object({
  id: id.required(),
  id_period: id_period.required(),
  degree: degree.required(),
  gradeSection: gradeSection.required(),
  teacherMail: teacherMail.required(),
  studentMail: studentMail.required(),
  classBegins: classBegins.required(),
  classEnds: classEnds.required(),
});

const updateClassSchema = Joi.object({
  id_period: id_period,
  degree: degree,
  gradeSection: gradeSection,
  teacherMail: teacherMail,
  studentMail: studentMail,
  classBegins: classBegins,
  classEnds: classEnds,
});

const getClassSchema = Joi.object({
  id: id.required(),
});

module.exports = { getClassSchema, updateClassSchema, createClassSchema };
