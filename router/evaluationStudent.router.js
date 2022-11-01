const express = require('express');
const router = express.Router();
// Ya que creamos router, procdemos a crear el CRUD.


const EvaluationStudentSevice = require('../services/evaluationStudent.service');
const service = new EvaluationStudentSevice();

console.log(service);
router.get('/', async (req, res) => {
  const evaluations = await service.find();
  res.json(evaluations);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const evaluation = await service.findOne(id);
  res.json(evaluation);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const evaluation = await service.create(body);
  res.status(200).json(evaluation);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const evaluationChanges = await service.update(id, body);
  res.json(evaluationChanges)
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const evaluation = await service.delete(id);
  res.json(evaluation);
});

module.exports = router;
