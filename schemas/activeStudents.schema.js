const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(5).max(150);
const lastName = Joi.string().min(5).max(150);
const status = Joi.string();
const course = Joi.string();
const discount = Joi.string();
const totalCost = Joi.number().integer();
const studentId = Joi.number().integer();

const createActiveStudentsSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  status: status.required(),
  course: course.required(),
  studentId: studentId.required(),
});

const updateActiveStudentsSchema = Joi.object({
  status: status,
  course: course,
  discount: discount,
  totalCost: totalCost,
  studentId: studentId,
});

const getActiveStudentsSchema = Joi.object({
  id: id.required(),
});

module.exports = { getActiveStudentsSchema, updateActiveStudentsSchema, createActiveStudentsSchema }
