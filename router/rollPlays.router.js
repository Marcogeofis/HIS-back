const express = require('express');
const router = express.Router();
// Ya que creamos router, procdemos a crear el CRUD.

const validatorHandler = require('../middlewares/validator.handler');
const { createRollPlaySchema, updateRollPlaySchema, getRollPlaySchema, queryRollPlaySchema } = require('../schemas/rollPlays.schema');
const RollPlaysSevice = require('../services/rollPlays.service');
const service = new RollPlaysSevice();

router.get('/',
  validatorHandler(queryRollPlaySchema, 'query'),
  async (req, res, next) => {
    try {
      const rollPlays = await service.find(req.query);
      res.json(rollPlays);
    } catch (error) {
      next(error)
    }

});

router.get('/:id',
  validatorHandler(getRollPlaySchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const rollPlay = await service.findOne(id);
    res.json(rollPlay);
  } catch (error) {
    next(error)
  }

});

router.post('/',
  validatorHandler(createRollPlaySchema, 'body'),
  async (req, res, next) => {
  try {
    const body = req.body;
    const rollPlay = await service.create(body);
    res.status(200).json(rollPlay);
  } catch (error) {
    next(error)
  }

});

router.patch('/:id',
  validatorHandler(getRollPlaySchema, 'params'),
  validatorHandler(updateRollPlaySchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const rollPlayChange = await service.update(id, body);
    res.json(rollPlayChange)
  } catch (error) {
    next(error)
  }

});

router.delete('/:id',
  validatorHandler(getRollPlaySchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const rollPlay = await service.delete(id);
    res.json(rollPlay);
  } catch (error) {
    next(error)
  }

});

module.exports = router;
