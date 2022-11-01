const express = require('express');
const router = express.Router();
// Ya que creamos router, procdemos a crear el CRUD.


const teacherSevice = require('../services/teacher.service');
const service = new teacherSevice();

router.get('/', async (req, res) => {
  const teachers = await service.find();
  res.json(teachers);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const teacher = await service.findOne(id);
  res.json(teacher);
});
router.post('/', async (req, res) => {
  const body = req.body;
  const student = await service.create(body);
  res.status(200).json(student);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const teacherChanges = await service.update(id, body);
  res.json(teacherChanges)
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const teacher = await service.delete(id);
  res.json(teacher);
});



module.exports = router;
