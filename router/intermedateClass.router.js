const express = require('express');
const router = express.Router();
const { checkRoles } = require('../middlewares/auth.handler');
const passport = require('passport');
// Ya que creamos router, procdemos a crear el CRUD.

const validatorHandler = require('../middlewares/validator.handler');
const { getIntermediateClassSchema, updateIntermediateClassSchema, createIntermediateClassSchema, queryIntermediateClassSchema } = require('../schemas/intermediateClass.schema');
const IntermediateClassService = require('../services/intermediate.service');
const service = new IntermediateClassService();

router.get('/',
  validatorHandler(queryIntermediateClassSchema, 'query'),
  async (req, res, next) => {
  try {
    const allIntermediateClass = await service.find();
    res.json(allIntermediateClass);
  } catch (error) {
    next(error)
  }
});

router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('teacher/Admin', 'superAdmin', 'student'),
  validatorHandler(getIntermediateClassSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const intermediateClass = await service.findOne(id);
      res.json(intermediateClass);
    } catch (error) {
      next(error)
    }

});

router.post('/',
  passport.authenticate('jwt', {session: false}),
  checkRoles('teacher/Admin', 'superAdmin', 'teacher'),
  validatorHandler(createIntermediateClassSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const intermediateClass = await service.create(body);
      res.status(200).json(intermediateClass);
    } catch (error) {
      next(error)
    }

});

router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('teacher/Admin', 'superAdmin'),
  validatorHandler(getIntermediateClassSchema, 'params'),
  validatorHandler(updateIntermediateClassSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const intermediateClassChanges = await service.update(id, body);
      res.json(intermediateClassChanges)
    } catch (error) {
      next(error)
    }

});

router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin'),
  validatorHandler(getIntermediateClassSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const intermediateClassChanges = await service.delete(id);
      res.json(intermediateClassChanges);
    } catch (error) {
      next(error)
    }

});

module.exports = router;
