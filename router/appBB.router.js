const express = require('express');
const router = express.Router();
const { checkRoles } = require('../middlewares/auth.handler');
const passport = require('passport');

// Ya que creamos router, procdemos a crear el CRUD.

const validatorHandler = require('../middlewares/validator.handler');
const { getAppBBSchema, updateAppBBSchema, createAppBBSchema } = require('../schemas/appBB.schema');
const AppBBProgressSevice = require('../services/appBB.service');
const service = new AppBBProgressSevice();

router.get('/',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin'),
  async (req, res, next) => {
    const appBB = await service.find();
    res.json(appBB);
});

router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin'),
  validatorHandler(getAppBBSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const appBBProgress = await service.findOne(id);
    res.json(appBBProgress);
  } catch (error) {
    next(error)
  }

});

router.post('/',
  passport.authenticate('jwt', {session: false}),
  checkRoles('teacher', 'teacher/Admin', 'student', 'superAdmin'),
  validatorHandler(createAppBBSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const appBBProgress = await service.create(body);
      res.status(200).json(appBBProgress);
    } catch (error) {
      next(error)
    }
});

router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin'),
  validatorHandler(getAppBBSchema, 'params'),
  validatorHandler(updateAppBBSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const appBBProgressChanges = await service.update(id, body);
    res.json(appBBProgressChanges)
  } catch (error) {
    next(error)
  }

});

router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin'),
  validatorHandler(getAppBBSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const appBBProgressCourse = await service.delete(id);
    res.json(appBBProgressCourse);
  } catch (error) {
    next(error)
  }

});

module.exports = router;
