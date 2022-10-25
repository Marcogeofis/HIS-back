const express = require('express');

const router = express.Router();

/*
Ya que creamos router, procdemos a crear el CRUD.
  C => create
  R => replace
  U => update
  D => delete
*/

router.get('/', (req, res) => {
  res.json({
    "niveles": [{
      "id": 1,
      "nivel": "Básico",
    },
    {
      "id": 2,
      "nivel": "Intermedio",
    },
    {
      "id": 3,
      "nivel": "Avanzado",
    }]
  });
});


router.get('/courses/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    "nivel": "Básico",
    "costo": 1200
  },
  // {
  //   id,
  //   "nivel": "intermedio",
  //   "costo": 1800
  // },
  // {
  //   id,
  //   "nivel": "Avanzado",
  //   "costo": 2500
  // }
  );
});

router.get('/courses/level/temas', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }

});


module.exports = router;
