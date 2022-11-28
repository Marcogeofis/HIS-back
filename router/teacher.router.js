const express = require('express');
const router = express.Router();
// Ya que creamos router, procdemos a crear el CRUD.

const validatorHandler = require('../middlewares/validator.handler');
const { createTeacherSchema, updateTeacherSchema, getTeacherSchema, queryTeacherSchema } = require('../schemas/teacher.schema');
const teacherSevice = require('../services/teacher.service');
const service = new teacherSevice();

router.get('/',
  validatorHandler(queryTeacherSchema, 'query'),
    async (req, res, next) => {
      try {
        const teachers = await service.find(req.query);
        res.json(teachers);
      } catch (error) {
        next(error)
      }
});

router.get('/:id',
  validatorHandler(getTeacherSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const teacher = await service.findOne(id);
    res.json(teacher);
  } catch (error) {
    next(error);
  }

});

router.post('/',
  validatorHandler(createTeacherSchema, 'body'),
  async (req, res, next) => {
  try {
    const body = req.body;
    const student = await service.create(body);
    res.status(200).json(student);
  } catch (error) {
    next(error);
  }

});

router.patch('/:id',
  validatorHandler(getTeacherSchema, 'params'),
  validatorHandler(updateTeacherSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const teacherChanges = await service.update(id, body);
    res.json(teacherChanges)
  } catch (error) {
    next(error);
  }

});

router.delete('/:id',
  validatorHandler(getTeacherSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const teacher = await service.delete(id);
    res.json(teacher);
  } catch (error) {
    next(error);
  }

});

module.exports = router;
