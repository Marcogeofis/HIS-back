const express = require('express');
const router = express.Router();
const { checkRoles } = require('../middlewares/auth.handler');
const passport = require('passport');
// Ya que creamos router, procdemos a crear el CRUD.

const validatorHandler = require('../middlewares/validator.handler');
const { getClassSchema, updateClassSchema, createClassSchema } = require('../schemas/class.schema');
const ClassToCourseSevice = require('../services/class.service');
const service = new ClassToCourseSevice();

router.get('/', async (req, res, next) => {
  const classCourse = await service.find();
  res.json(classCourse);
});

router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('teacher/Admin', 'superAdmin', 'student'),
  validatorHandler(getClassSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const classCourse = await service.findOne(id);
      res.json(classCourse);
    } catch (error) {
      next(error)
    }

});

router.post('/',
  passport.authenticate('jwt', {session: false}),
  checkRoles('teacher/Admin', 'superAdmin', 'teacher'),
  validatorHandler(createClassSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const classCourse = await service.create(body);
      res.status(200).json(classCourse);
    } catch (error) {
      next(error)
    }

});

router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('teacher/Admin', 'superAdmin'),
  validatorHandler(getClassSchema, 'params'),
  validatorHandler(updateClassSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const classCourseChanges = await service.update(id, body);
      res.json(classCourseChanges)
    } catch (error) {
      next(error)
    }

});

router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin'),
  validatorHandler(getClassSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const classCourse = await service.delete(id);
      res.json(classCourse);
    } catch (error) {
      next(error)
    }

});

module.exports = router;
