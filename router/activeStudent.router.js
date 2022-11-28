const express = require('express');
const router = express.Router();
// Ya que creamos router, procdemos a crear el CRUD.

const validatorHandler = require('../middlewares/validator.handler');
const { getActiveStudentsSchema, updateActiveStudentsSchema, createActiveStudentsSchema } = require('../schemas/activeStudents.schema');
const ActiveRegisterSevice = require('../services/activeStudent.service');
const service = new ActiveRegisterSevice();

router.get('/', async (req, res, next) => {
  const activeStudents = await service.find();
  res.json(activeStudents);
});

router.get('/:id',
  validatorHandler(getActiveStudentsSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const activeStudent = await service.findOne(id);
    res.json(activeStudent);
  } catch (error) {
    next(error)
  }

});

router.post('/',
  validatorHandler(createActiveStudentsSchema, 'body'),
  async (req, res, next) => {
  try {
    const body = req.body;
    const newActiveStudents = await service.create(body);
    res.status(200).json(newActiveStudents);
  } catch (error) {
    next(error)
  }

});

router.patch('/:id',
  validatorHandler(getActiveStudentsSchema, 'params'),
  validatorHandler(updateActiveStudentsSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const activeStudent = await service.update(id, body);
    res.json(activeStudent)
  } catch (error) {
    next(error)
  }

});

router.delete('/:id',
  validatorHandler(getActiveStudentsSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const activeStudent = await service.delete(id);
    res.json(activeStudent);
  } catch (error) {
    next(error)
  }

});

module.exports = router;
