const express = require('express');

const router = express.Router();
// Ya que creamos router, procdemos a crear el CRUD.

router.get('/', (req, res) => {
  res.send('Esta seccion contendra todo las evaluaciones del alumno');
});


module.exports = router;
