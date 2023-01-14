const express = require('express');
const router = express.Router();
const passport = require('passport');
const { checkRoles } = require('../middlewares/auth.handler');

// Crear el CRUD.

const validatorHandler = require('../middlewares/validator.handler');
const { createSoundSchema, updateSoundSchema, getSoundSchema, querySoundSchema } = require('../schemas/phoneticTable.schema')
const PhoneticTableService = require('../services/phoneticTable.service');

const service = new PhoneticTableService();

router.get('/',
  validatorHandler(querySoundSchema, 'query'),
  async (req, res, next) => {
    try {
      const allWords = await service.find(req.query)
      res.json(allWords);
    } catch (error) {
      next(error)
    }

});

router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin', 'teacher/Admin', 'teacher'),
  validatorHandler(getSoundSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const word = await service.findOne(id);
      res.json(word);
    } catch (error) {
      next(error);
    }

});

router.post('/',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin', 'teacher/Admin'),
  validatorHandler(createSoundSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const word = await service.create(body);
      res.status(200).json(word);
    } catch (error) {
      next(error);
    }

});

router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin', 'teacher/Admin', 'teacher'),
  validatorHandler(getSoundSchema, 'params'),
  validatorHandler(updateSoundSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const wordChange = await service.update(id, body);
      res.json(wordChange)
    } catch (error) {
      next(error);
    }

});

router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin'),
  validatorHandler(getSoundSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const word = await service.delete(id);
    res.json(word);
  } catch (error) {
    next(error);
  }

});


module.exports = router;
