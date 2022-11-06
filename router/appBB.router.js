const express = require('express');
const router = express.Router();
// Ya que creamos router, procdemos a crear el CRUD.

const validatorHandler = require('../middlewares/validator.handler');
const { getAppBBSchema, updateAppBBSchema, createAppBBSchema } = require('../schemas/appBB.schema');
const AppBBProgressSevice = require('../services/appBB.service');
const service = new AppBBProgressSevice();

router.get('/', async (req, res, next) => {
  const appBB = await service.find();
  res.json(appBB);
});

router.get('/:id',
  validatorHandler(getAppBBSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const appBBProgress = await service.findOne(id);
    res.json(appBBProgress);
  } catch (error) {
    next(error)
  }

});

router.post('/',
  validatorHandler(createAppBBSchema, 'body'),
  async (req, res, next) => {
  try {
    const body = req.body;
    const appBBProgress = await service.create(body);
    res.status(200).json(appBBProgress);
  } catch (error) {
    next(error)
  }

});

router.patch('/:id',
  validatorHandler(getAppBBSchema, 'params'),
  validatorHandler(updateAppBBSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const appBBProgressChanges = await service.update(id, body);
    res.json(appBBProgressChanges)
  } catch (error) {
    next(error)
  }

});

router.delete('/:id',
  validatorHandler(getAppBBSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const appBBProgressCourse = await service.delete(id);
    res.json(appBBProgressCourse);
  } catch (error) {
    next(error)
  }

});

module.exports = router;
