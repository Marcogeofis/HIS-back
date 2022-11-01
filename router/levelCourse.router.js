const express = require('express');
const router = express.Router();
// Ya que creamos router, procdemos a crear el CRUD.

const levelCourseService = require('../services/levelCourse.service');

const service = new levelCourseService();

router.get('/', async (req, res) => {
  const levelCourses = await service.find()
  res.json(levelCourses);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const levelCourse = await service.findOne(id);
  res.json(levelCourse);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const levelCourse = await service.create(body);
  res.status(200).json(levelCourse);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const courseChanges = await service.update(id, body);
  res.json(courseChanges)
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const levelcourse = await service.delete(id);
  res.json(levelcourse);
});



module.exports = router;
