const express = require('express');
const router = express.Router();
// Ya que creamos router, procdemos a crear el CRUD.

const ScheduleService = require('../services/schedule.service');
const service = new ScheduleService;


router.get('/', async (req, res) => {
  const schedules = await service.find();
  res.json(schedules);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const schedule = await service.findOne(id);
  res.json(schedule);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newSchedule = await service.create(body);
  res.json(newSchedule);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const scheduleChanges = await service.update(id, body);
  res.json(scheduleChanges);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const schedule = await service.delete(id);
  res.json(schedule);
});

module.exports = router;

