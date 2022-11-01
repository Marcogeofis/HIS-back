const express = require('express');
const CoursesService = require('../services/courses.service');

const router = express.Router();
const service = new CoursesService();

/*
Ya que creamos router, procedemos a crear el CRUD.
  C => create, R => replace, U => update, D => delete.
*/


router.get('/', async (req, res) => {
  const courses = await service.find();
  res.json(courses);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  // const idInteger = parseInt(id);  pasandolo a tipo number para que lo pueda leer
  const course = await service.findOne(id);
  res.json(course);
});

router.post('/', async (req, res) =>{
  const body = req.body;
  const newCourse = await service.create(body);
  res.status(200).json(newCourse)
});

router.patch('/:id', async (req, res)=>{
  const { id } = req.params;
  const body = req.body;
  const course = await service.update(id, body);
  res.json(course)
})

router.delete('/:id', async (req, res)=>{
  const { id } = req.params;
  const course = await service.delete(id);
  res.json(course)
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
