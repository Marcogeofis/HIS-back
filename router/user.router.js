const express = require('express');
const router = express.Router();
// Ya que creamos router, procdemos a crear el CRUD.

const validatorHandler = require('../middlewares/validator.handler');
const {createUserSchema, updateUserSchema, getUserSchema} = require('../schemas/user.schema')
const userStudentService = require('../services/user.service');

const service = new userStudentService();

router.get('/', async (req, res, next) => {
    const students = await service.find()
    res.json(students);
});

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await service.findOne(id);
    res.json(student);
  } catch (error) {
    next(error);
  }

});

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
  try {
    const body = req.body;
    const students = await service.create(body);
    res.status(200).json(students);
  } catch (error) {
    next(error);
  }

});

router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const studentChanges = await service.update(id, body);
    res.json(studentChanges)
  } catch (error) {
    next(error);
  }

});

router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await service.delete(id);
    res.json(student);
  } catch (error) {
    next(error);
  }

});


module.exports = router;
