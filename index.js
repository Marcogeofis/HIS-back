const express = require('express');
const app = express();
const port = 3000;
const routerApi = require('./router');

app.get('/', (req, res) => {
  res.send('Bienvenido a BB');
});

routerApi(app)

app.listen(port, ()=>{
  console.log('El puerto se le vanto en ' + port);
})

