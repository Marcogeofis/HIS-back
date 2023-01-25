const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(5).max(150);
const lastName = Joi.string().min(5).max(150);
const modalidad = Joi.string();
const status = Joi.string();
const curso = Joi.string();
const costo = Joi.number().integer();
const descuento = Joi.string();
const claveDescuento = Joi.string();
const totalCosto = Joi.number().integer();
const fechaDePago = Joi.string();
const inicioPeriodo = Joi.string();
const finPeriodo = Joi.string();
const studentId = Joi.number().integer();

const createActiveStudentsSchema = Joi.object({
  studentId: studentId.required(),
  name: name.required(),
  lastName: lastName.required(),
  modalidad: modalidad.required(),
  status: status.required(),
  curso: curso.required(),
  costo: costo.required(),
  descuento: descuento.required(),
  claveDescuento: claveDescuento.required(),
  totalCosto: totalCosto.required(),
  fechaDePago: fechaDePago.required(),
  inicioPeriodo: inicioPeriodo.required(),
  finPeriodo: finPeriodo.required(),
});

const updateActiveStudentsSchema = Joi.object({
  modalidad: modalidad,
  status: status,
  curso: curso,
  costo: costo,
  descuento: descuento,
  claveDescuento: claveDescuento,
  totalCosto: totalCosto,
  fechaDePago: fechaDePago,
  inicioPeriodo: inicioPeriodo,
  finPeriodo: finPeriodo,
  studentId: studentId,

});

const getActiveStudentsSchema = Joi.object({
  id: id.required(),
});

module.exports = { getActiveStudentsSchema, updateActiveStudentsSchema, createActiveStudentsSchema }
