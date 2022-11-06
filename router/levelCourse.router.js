const express = require('express');
const router = express.Router();
// Ya que creamos router, procdemos a crear el CRUD.

const validatorHandler = require('../middlewares/validator.handler');
const { createLevelCourseSchema, updateLevelCourseSchema, getLevelCourseSchema} = require('../schemas/levelCourse.schema')
const levelCourseService = require('../services/levelCourse.service');
const service = new levelCourseService();

router.get('/', async (req, res, next) => {
  const levelCourses = await service.find()
  res.json(levelCourses);
});

router.get('/:id',
  validatorHandler(getLevelCourseSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const levelCourse = await service.findOne(id);
    res.json(levelCourse);
  } catch (error) {
    next(error)
  }

});

router.post('/',
  validatorHandler(createLevelCourseSchema, 'body'),
  async (req, res, next) => {
  try {
    const body = req.body;
    const levelCourse = await service.create(body);
    res.status(200).json(levelCourse);
  } catch (error) {
    next(error)
  }

});

router.patch('/:id',
  validatorHandler(getLevelCourseSchema, 'params'),
  validatorHandler(updateLevelCourseSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const courseChanges = await service.update(id, body);
    res.json(courseChanges)
  } catch (error) {
    next(error)
  }

});

router.delete('/:id',
  validatorHandler(getLevelCourseSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const levelcourse = await service.delete(id);
    res.json(levelcourse);
  } catch (error) {
    next(error)
  }

});

module.exports = router;
