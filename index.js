const express = require('express');
const cors = require('cors');
const routerApi = require('./router');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');


const app = express();
const port = 3000;


app.use(express.json());

const whiteList = ["http://localhost:5500", "http://otrodominio.co"];
const options = {
  origin: (origin, callback)=>{
    if(whiteList.includes(origin) || !origin){
      callback(null, true)
    } else {
      callback(new Error('no permitido'));
    }
  }
};
app.use(cors(options)); //  con este cors le doy acceso a cualquier dominio.

// pero si queremos darle acceso a otro dominio para pruebas usamos cors para dar este acceso solo a uno y no a todos.


app.get('/', (req, res) => {
  res.send('Bienvenido a BB');
});


routerApi(app);
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, ()=>{
  console.log(`El puerto se le vanto en http://localhost:${port}`);
})

