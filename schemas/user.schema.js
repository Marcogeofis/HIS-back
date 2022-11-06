const Joi = require('joi');

const id = Joi.string();
const nombre = Joi.string().min(5).max(20);
const apellidoPaterno = Joi.string().min(5).max(20);
const apellidoMaterno = Joi.string().min(5).max(20);
const edad = Joi.number().integer();
const email = Joi.string().max(50);
const password = Joi.string().max(50);


const createUserSchema = Joi.object({
  id: id.required(),
  nombre: nombre.required(),
  apellidoPaterno: apellidoPaterno.required(),
  apellidoMaterno: apellidoMaterno.required(),
  edad: edad.required(),
  email: email.required(),
  password: password.required(),

});


const updateUserSchema = Joi.object({
  nombre: nombre,
  apellidoMaterno: apellidoPaterno,
  apellidoMaterno: apellidoPaterno,
  edad: edad,
  email: email,

})

const getUserSchema = Joi.object({
  id: id.required(),
});


module.exports = { createUserSchema, updateUserSchema, getUserSchema }

