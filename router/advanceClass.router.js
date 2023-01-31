const express = require('express');
const router = express.Router();
const { checkRoles } = require('../middlewares/auth.handler');
const passport = require('passport');
// Ya que creamos router, procdemos a crear el CRUD.

const validatorHandler = require('../middlewares/validator.handler');
const { getAdvanceClassSchema, updateAdvanceClassSchema, createAdvanceClassSchema, queryAdvanceClassSchema } = require('../schemas/advanceClass.schema');
const AdvanceClassService = require('../services/advance.service');
const service = new AdvanceClassService();

router.get('/',
  validatorHandler(queryAdvanceClassSchema, 'query'),
  async (req, res, next) => {
  try {
    const allAdvanceClass = await service.find();
    res.json(allAdvanceClass);
  } catch (error) {
    next(error)
  }
});

router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('teacher/Admin', 'superAdmin', 'student'),
  validatorHandler(getAdvanceClassSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const advanceClass = await service.findOne(id);
      res.json(advanceClass);
    } catch (error) {
      next(error)
    }

});

router.post('/',
  passport.authenticate('jwt', {session: false}),
  checkRoles('teacher/Admin', 'superAdmin', 'teacher'),
  validatorHandler(createAdvanceClassSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const advanceClass = await service.create(body);
      res.status(200).json(advanceClass);
    } catch (error) {
      next(error)
    }

});

router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('teacher/Admin', 'superAdmin'),
  validatorHandler(getAdvanceClassSchema, 'params'),
  validatorHandler(updateAdvanceClassSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const advanceClassChanges = await service.update(id, body);
      res.json(advanceClassChanges)
    } catch (error) {
      next(error)
    }

});

router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin'),
  validatorHandler(getAdvanceClassSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const advanceClass = await service.delete(id);
      res.json(advanceClass);
    } catch (error) {
      next(error)
    }

});

module.exports = router;
