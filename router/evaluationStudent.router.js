const express = require('express');
const router = express.Router();
// Ya que creamos router, procdemos a crear el CRUD.

const validatorHandler = require('../middlewares/validator.handler');
const { createEvaluationStudentSchema, updateEvaluationStudentSchema, getEvaluationStudentSchema } = require('../schemas/evaluationStudent.schema')
const EvaluationStudentSevice = require('../services/evaluationStudent.service');
const service = new EvaluationStudentSevice();

router.get('/', async (req, res, next) => {
  const evaluations = await service.find();
  res.json(evaluations);
});

router.get('/:id',
  validatorHandler(getEvaluationStudentSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const evaluation = await service.findOne(id);
    res.json(evaluation);
  } catch (error) {
    next(error)
  }

});

router.post('/',
  validatorHandler(createEvaluationStudentSchema, 'body'),
  async (req, res, next) => {
  try {
    const body = req.body;
    const evaluation = await service.create(body);
    res.status(200).json(evaluation);
  } catch (error) {
    next(error)
  }

});

router.patch('/:id',
  validatorHandler(getEvaluationStudentSchema, 'params'),
  validatorHandler(updateEvaluationStudentSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const evaluationChanges = await service.update(id, body);
    res.json(evaluationChanges)
  } catch (error) {
    next(error)
  }

});

router.delete('/:id',
  validatorHandler(getEvaluationStudentSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const evaluation = await service.delete(id);
    res.json(evaluation);
  } catch (error) {
    next(error)
  }

});

module.exports = router;
