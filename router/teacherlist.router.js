const express = require('express');
const router = express.Router();
const passport = require('passport');
const { checkRoles } = require('../middlewares/auth.handler');
// Ya que creamos router, procdemos a crear el CRUD.

const validatorHandler = require('../middlewares/validator.handler');
const { createTeacherListSchema, updateTeacherListSchema, getTeacherListSchema, queryTeacherListSchema } = require('../schemas/teacherList.schema');
const TeacherListSevice = require('../services/teacherList.service');
const service = new TeacherListSevice();

router.get('/',
  validatorHandler(queryTeacherListSchema, 'query'),
    async (req, res, next) => {
      try {
        const teachersList = await service.find(req.query);
        res.json(teachersList);
      } catch (error) {
        next(error)
      }
});

router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin', 'teacher/admin', 'teacher'),
  validatorHandler(getTeacherListSchema, 'params'),
    async (req, res, next) => {
      try {
        const { id } = req.params;
        const studentOfTeacher = await service.findOne(id);
        res.json(studentOfTeacher);
      } catch (error) {
        next(error);
      }

});

router.post('/',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin','student'),
  validatorHandler(createTeacherListSchema, 'body'),
    async (req, res, next) => {
      try {
        const body = req.body;
        const studentRecord = await service.create(body);
        res.status(200).json(studentRecord);
      } catch (error) {
        next(error);
      }

});

router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin', 'teacher/admin'),
  validatorHandler(getTeacherListSchema, 'params'),
  validatorHandler(updateTeacherListSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const studentOfTeacherChange = await service.update(id, body);
      res.json(studentOfTeacherChange)
    } catch (error) {
      next(error);
    }

});

router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin'),
  validatorHandler(getTeacherListSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const studentOfTeacher = await service.delete(id);
      res.json(studentOfTeacher);
    } catch (error) {
      next(error);
    }

});

module.exports = router;
