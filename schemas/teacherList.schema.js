const Joi = require('joi');

const id = Joi.number().integer();
const degree = Joi.string();
const section = Joi.string();
const teacherId = Joi.string();
const nameOfTeacher = Joi.string();
const studentId = Joi.string();
const nameOfStudent = Joi.string();
const mail = Joi.string().email();
const period = Joi.string();
const scheduleOf = Joi.string();
const offset = Joi.number().integer();
const limit = Joi.number().integer();

const createTeacherListSchema = Joi.object({
  degree: degree.required(),
  section: section.required(),
  teacherId: teacherId.required(),
  nameOfTeacher: nameOfTeacher.required(),
  studentId: studentId.required(),
  nameOfStudent: nameOfStudent.required(),
  mail: mail.required(),
  period: period.required(),
  scheduleOf: scheduleOf.required(),
});

const updateTeacherListSchema = Joi.object({
  degree,
  section,
  teacherId,
  nameOfTeacher,
  studentId,
  nameOfStudent,
  mail,
  period,
  scheduleOf,
});

const getTeacherListSchema = Joi.object({
  id: id.required(),
});

const queryTeacherListSchema = Joi.object({
  limit,
  offset,
  period,
});

module.exports = { createTeacherListSchema, updateTeacherListSchema, getTeacherListSchema, queryTeacherListSchema }
