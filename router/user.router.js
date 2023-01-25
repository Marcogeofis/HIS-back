const express = require('express');
const router = express.Router();
const { checkRoles } = require('../middlewares/auth.handler');
const passport = require('passport');
// Ya que creamos router, procdemos a crear el CRUD.

const validatorHandler = require('../middlewares/validator.handler');
const { createUserSchema, updateUserSchema, getUserSchema, queryUserSchema } = require('../schemas/user.schema')
const UserService = require('../services/user.service');


const service = new UserService();

router.get('/',
  // passport.authenticate('jwt', {session: false}),
  // checkRoles('superAdmin'),
  validatorHandler(queryUserSchema, 'query'),
  async (req, res, next) => {
    try {
      const users = await service.find(req.query)
      res.json(users);
    } catch (error) {
      next(error)
    }
});

router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin'),
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await service.findOne(id);
    res.json(user);
  } catch (error) {
    next(error);
  }

});

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
  try {
    const body = req.body;
    const users = await service.create(body);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }

});

router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const userChanges = await service.update(id, body);
    res.json(userChanges)
  } catch (error) {
    next(error);
  }

});

router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin'),
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await service.delete(id);
    res.json(user);
  } catch (error) {
    next(error);
  }

});


module.exports = router;
