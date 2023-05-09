const express = require('express');
const router = express.Router();
const { checkRoles } = require('../middlewares/auth.handler');
const passport = require('passport');
// Ya que creamos router, procdemos a crear el CRUD.

const validatorHandler = require('../middlewares/validator.handler');
const { getBasicClassSchema, updateBasicClassSchema, createBasicClassSchema, queryBasicClassSchema } = require('../schemas/basicClass.schema');
const BasicClassService = require('../services/basicClass.service');
const service = new BasicClassService();

router.get('/',
  validatorHandler(queryBasicClassSchema, 'query'),
  async (req, res, next) => {
  try {
    const allBasicClass = await service.find(req.query);
    res.json(allBasicClass);
  } catch (error) {
    next(error)
  }
});

router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('teacher/Admin', 'superAdmin', 'student'),
  validatorHandler(getBasicClassSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const basicClass = await service.findOne(id);
      res.json(basicClass);
    } catch (error) {
      next(error)
    }

});

router.post('/',
  passport.authenticate('jwt', {session: false}),
  checkRoles('teacher/Admin', 'superAdmin', 'teacher'),
  validatorHandler(createBasicClassSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const basicClass = await service.create(body);
      res.status(200).json(basicClass);
    } catch (error) {
      next(error)
    }

});

router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('teacher/Admin', 'superAdmin'),
  validatorHandler(getBasicClassSchema, 'params'),
  validatorHandler(updateBasicClassSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const basicClassChanges = await service.update(id, body);
      res.json(basicClassChanges)
    } catch (error) {
      next(error)
    }

});

router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin'),
  validatorHandler(getBasicClassSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const basicClass = await service.delete(id);
      res.json(basicClass);
    } catch (error) {
      next(error)
    }

});

module.exports = router;
