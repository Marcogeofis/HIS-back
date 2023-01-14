const express = require('express');
const passport = require('passport');
const { checkRoles } = require('../middlewares/auth.handler');
const router = express.Router();
// Ya que creamos router, procdemos a crear el CRUD.

const validatorHandler = require('../middlewares/validator.handler');
const { createLevelCourseSchema, updateLevelCourseSchema, getLevelCourseSchema, queryLevelCourseSchema} = require('../schemas/levelCourse.schema')
const levelCourseService = require('../services/levelCourse.service');
const service = new levelCourseService();

router.get('/',
  validatorHandler(queryLevelCourseSchema, 'query'),
  async (req, res, next) => {
    try {
      const levelCourses = await service.find(req.query);
      res.json(levelCourses);
    } catch (error) {
      next(error);
    }

});

router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin', 'teacher/Admin', 'teacher'),
  validatorHandler(getLevelCourseSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const levelCourse = await service.findOne(id);
      res.json(levelCourse);
    } catch (error) {
      next(error)
    }
});

router.post('/',
  passport.authenticate('jwt', {session: false}),
  checkRoles('teacherAdmin', 'superAdmin'),
  validatorHandler(createLevelCourseSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const levelCourse = await service.create(body);
      res.status(200).json(levelCourse);
    } catch (error) {
      next(error)
    }

});

router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin', 'teacher/Admin'),
  validatorHandler(getLevelCourseSchema, 'params'),
  validatorHandler(updateLevelCourseSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const courseChanges = await service.update(id, body);
      res.json(courseChanges)
    } catch (error) {
      next(error)
    }
});

router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin'),
  validatorHandler(getLevelCourseSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const levelcourse = await service.delete(id);
      res.json(levelcourse);
    } catch (error) {
      next(error)
    }

});

module.exports = router;
