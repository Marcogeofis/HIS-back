const express = require('express');
const router = express.Router();
// Ya que creamos router, procdemos a crear el CRUD.

const userStudentService = require('../services/user.service');

const service = new userStudentService();

router.get('/', async (req, res) => {
  const students = await service.find()
  res.json(students);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const student = await service.findOne(id);
  res.json(student);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const students = await service.create(body);
  res.status(200).json(students);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const studentChanges = await service.update(id, body);
  res.json(studentChanges)
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const student = await service.delete(id);
  res.json(student);
});


module.exports = router;
