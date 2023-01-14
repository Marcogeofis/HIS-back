const express = require('express');
const router = express.Router();
const { checkRoles } = require('../middlewares/auth.handler');
const passport = require('passport');
// Crear el CRUD.

const validatorHandler = require('../middlewares/validator.handler');
const { createWordsSchema, updateWordsSchema, getWordsSchema, queryWordsSchema } = require('../schemas/vocabulary.schema')
const AllVocabularyService = require('../services/vocabulary.service');

const service = new AllVocabularyService();

router.get('/',
  validatorHandler(queryWordsSchema, 'query'),
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
  checkRoles('superAdmin', 'teacher/admin', 'teacher'),
  validatorHandler(getWordsSchema, 'params'),
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
  checkRoles('superAdmin', 'teacher/admin'),
  validatorHandler(createWordsSchema, 'body'),
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
  validatorHandler(getWordsSchema, 'params'),
  validatorHandler(updateWordsSchema, 'body'),
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
  validatorHandler(getWordsSchema, 'params'),
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
