const express = require('express');
const router = express.Router();
const { checkRoles } = require('../middlewares/auth.handler');
const passport = require('passport');
// Ya que creamos router, procdemos a crear el CRUD.

const validatorHandler = require('../middlewares/validator.handler');
const { createStudentSchema, updateStudentSchema, getStudentSchema, queryStudentSchema } = require('../schemas/student.schema')
const UserStudentService = require('../services/student.service');

const service = new UserStudentService();

router.get('/',
  // passport.authenticate('jwt', {session: false}),
  // checkRoles('teacher/Admin', 'superAdmin'),
  validatorHandler(queryStudentSchema, 'query'),
  async (req, res, next) => {
    try {
      const students = await service.find(req.query)
      res.json(students);
    } catch (error) {
      next(error)
    }
});

router.get('/:id',
  // passport.authenticate('jwt', {session: false}),
  // checkRoles('teacher/Admin', 'superAdmin', 'student'),
  validatorHandler(getStudentSchema, 'params'),
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
  validatorHandler(createStudentSchema, 'body'),
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
  validatorHandler(getStudentSchema, 'params'),
  validatorHandler(updateStudentSchema, 'body'),
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
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin'),
  validatorHandler(getStudentSchema, 'params'),
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
