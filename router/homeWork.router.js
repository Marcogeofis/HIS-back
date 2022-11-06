const express = require('express');
const router = express.Router();
// Ya que creamos router, procdemos a crear el CRUD.

const validatorHandler = require('../middlewares/validator.handler');
const { getHworkSchema, createHworkSchema, updateHworkSchema } = require('../schemas/homeWork.schema');
const HomeworkService = require('../services/homeWork.service');
const service = new HomeworkService();

router.get('/', async (req, res, next) => {
    const studentHomeWorks = await service.find()
    res.json(studentHomeWorks);
});

router.get('/:id',
  validatorHandler(getHworkSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const studentHomeWork = await service.findOne(id);
    res.json(studentHomeWork);
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validatorHandler(createHworkSchema, 'body'),
  async (req, res, next) => {
  try {
    const body = req.body;
    const studentHomeWork = await service.create(body);
    res.status(200).json(studentHomeWork);
  } catch (error) {
    next(error);
  }

});

router.patch('/:id',
  validatorHandler(getHworkSchema, 'params'),
  validatorHandler(updateHworkSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const studentHomeWorkChanges = await service.update(id, body);
    res.json(studentHomeWorkChanges)
  } catch (error) {
    next(error);
  }

});

router.delete('/:id',
  validatorHandler(getHworkSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const studentHomeWork = await service.delete(id);
    res.json(studentHomeWork);
  } catch (error) {
    next(error);
  }

});


module.exports = router;
