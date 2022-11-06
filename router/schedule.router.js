const express = require('express');
const router = express.Router();
// Ya que creamos router, procdemos a crear el CRUD.

const validatorHandler = require('../middlewares/validator.handler.js');
const { createScheduleSchema, getScheduleSchema, updateScheduleSchema} = require('../schemas/schedule.schema');
const ScheduleService = require('../services/schedule.service');
const service = new ScheduleService;


router.get('/', async (req, res, next) => {
  const schedules = await service.find();
  res.json(schedules);

});

router.get('/:id',
  validatorHandler(getScheduleSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const schedule = await service.findOne(id);
    res.json(schedule);
  } catch (error) {
    next(error)
  }

});

router.post('/',
  validatorHandler(createScheduleSchema, 'body'),
  async (req, res, next) => {
  try {
    const body = req.body;
    const newSchedule = await service.create(body);
    res.json(newSchedule);
  } catch (error) {
    next(error)
  }

});

router.patch('/:id',
  validatorHandler(getScheduleSchema, 'params'),
  validatorHandler(updateScheduleSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const scheduleChanges = await service.update(id, body);
    res.json(scheduleChanges);
  } catch (error) {
    next(error)
  }

});

router.delete('/:id',
  validatorHandler(getScheduleSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const schedule = await service.delete(id);
    res.json(schedule);
  } catch (error) {
    next(error)
  }

});

module.exports = router;

