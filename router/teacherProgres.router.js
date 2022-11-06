const express = require('express');
const router = express.Router();
// Ya que creamos router, procdemos a crear el CRUD.

const validatorHandler = require('../middlewares/validator.handler');
const { getTeacherProgressSchema, updateTeacherProgressSchema, createTeacherProgressSchema } = require('../schemas/teacherProgress.schema')
const teacherProgressService = require('../services/teacherProgress.service');
const service = new teacherProgressService();

router.get('/', async (req, res, next) => {
  const teacherProgress = await service.find()
  res.json(teacherProgress);
});

router.get('/:id',
  validatorHandler(getTeacherProgressSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const teacherProgress = await service.findOne(id);
    res.json(teacherProgress);
  } catch (error) {
    next(error)
  }

});

router.post('/',
  validatorHandler(createTeacherProgressSchema, 'body'),
  async (req, res, next) => {
  try {
    const body = req.body;
    const teacherProgress = await service.create(body);
    res.status(200).json(teacherProgress);
  } catch (error) {
    next(error)
  }

});

router.patch('/:id',
  validatorHandler(getTeacherProgressSchema, 'params'),
  validatorHandler(updateTeacherProgressSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const teacherProgressChanges = await service.update(id, body);
    res.json(teacherProgressChanges)
  } catch (error) {
    next(error)
  }

});

router.delete('/:id',
  validatorHandler(getTeacherProgressSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const teacherProgress = await service.delete(id);
    res.json(teacherProgress);
  } catch (error) {
    next(error)
  }

});

module.exports = router;
