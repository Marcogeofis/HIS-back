const express = require('express');
const router = express.Router();
const { checkRoles } = require('../middlewares/auth.handler');
const passport = require('passport');
// Ya que creamos router, procdemos a crear el CRUD.

const validatorHandler = require('../middlewares/validator.handler');
const { getActiveStudentsSchema, updateActiveStudentsSchema, createActiveStudentsSchema } = require('../schemas/activeStudents.schema');
const ActiveRegisterSevice = require('../services/activeStudent.service');
const service = new ActiveRegisterSevice();

router.get('/',
  passport.authenticate('jwt', {session: false}),
  checkRoles('simpleAdmin', 'superAdmin'),
  async (req, res, next) => {
    try {
      const activeStudents = await service.find();
      res.json(activeStudents);
    } catch(error){
      next(error)
    }
});

router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('simpleAdmin', 'superAdmin'),
  validatorHandler(getActiveStudentsSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const activeStudent = await service.findOne(id);
      res.json(activeStudent);
    } catch (error) {
      next(error)
    }

});

router.post('/',
  passport.authenticate('jwt', {session: false}),
  checkRoles('simpleAdmin', 'superAdmin'),
  validatorHandler(createActiveStudentsSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newActiveStudents = await service.create(body);
      res.status(200).json(newActiveStudents);
    } catch (error) {
      next(error)
    }

});

router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('simpleAdmin', 'superAdmin'),
  validatorHandler(getActiveStudentsSchema, 'params'),
  validatorHandler(updateActiveStudentsSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const activeStudent = await service.update(id, body);
      res.json(activeStudent)
    } catch (error) {
      next(error)
    }

});

router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin'),
  validatorHandler(getActiveStudentsSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const activeStudent = await service.delete(id);
      res.json(activeStudent);
    } catch (error) {
      next(error)
    }

});

module.exports = router;
