const express = require('express');
const router = express.Router();
const { checkRoles } = require('../middlewares/auth.handler');
const passport = require('passport');
/*
Ya que creamos router, procedemos a crear el CRUD.
  C => create, R => replace, U => update, D => delete.
*/

const validatorHandler = require('../middlewares/validator.handler');
const { createCourseSchema, updateCourseSchema, getCourseSchema } = require('../schemas/courses.schema')
const AllCoursesService = require('../services/courses.service');
const service = new AllCoursesService();



router.get('/', async (req, res, next) => {
    const courses = await service.find();
    res.json(courses);
});

router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('teacher/Admin', 'superAdmin'),
  validatorHandler(getCourseSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      // const idInteger = parseInt(id);  pasandolo a tipo number para que lo pueda leer
      const course = await service.findOne(id);
      res.json(course);
    } catch (error) {
      next(error);
    }

});

router.post('/',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin'),
  validatorHandler(createCourseSchema, 'body'),
  async (req, res, next) =>{
    try{
      const body = req.body;
      const newCourse = await service.create(body);
      res.status(200).json(newCourse)
    }catch(error){
      next(error);
    }

});

router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin'),
  validatorHandler(getCourseSchema, 'params'),
  validatorHandler(updateCourseSchema, 'body'),
  async (req, res, next)=>{
    try {
      const { id } = req.params;
      const body = req.body;
      const course = await service.update(id, body);
      res.json(course);
    } catch (error) {
      next(error);
    }

})

router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('superAdmin'),
  validatorHandler(getCourseSchema, 'params'),
  async (req, res, next)=>{
    try {
      const { id } = req.params;
      const course = await service.delete(id);
      res.json(course)
    } catch (error) {
      next(error);
    }

})



// router.get('/courses/level/temas', (req, res) => {
//   const { limit, offset } = req.query;
//   if(limit && offset){
//     res.json({
//       limit,
//       offset
//     });
//   } else {
//     res.send('No hay parametros');
//   }

// });


module.exports = router;
