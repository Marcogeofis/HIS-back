const express = require('express');
const cors = require('cors');
const routerApi = require('./router');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');


const app = express();
const port = 3000;

// const mysql = require('mysql');
// const { insert, read, update, remove } = require('./operations/operations');
// const { insertPool, readPool, updatePool, removePool } = require('./operations/operations-pool');

// require("dotenv").config();

app.use(express.json());

const whiteList = ["http://localhost:5500", "http://otrodominio.co"];
const options = {
  origin: (origin, callback)=>{
    if(whiteList.includes(origin)){
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



// const connection = mysql.createConnection({
//   host: process.env.DBHOST,
//   user: process.env.DBUSER,
//   password: process.env.DBPASSWORD,
//   database: process.env.DBDATABASE,
// });

// const pool = mysql.createPool({
//   host: process.env.DBHOST,
//   user: process.env.DBUSER,
//   password: process.env.DBPASSWORD,
//   database: process.env.DBDATABASE,
// });



// connection.connect((err) =>{
//   if(err) throw err;
//   console.log("Connected to database");
// });


// app.get('/insert', (req, res) => {
//   insert(connection, {
//     name:"Pedrito", firstName: "Sola",
//     secondName: "hellmans", edad:45,
//     email: "hellmans@yahoo.com",
//     password: "er3rwder43d", id_nivel: 1},
//     result =>{
//     res.json(result);
//   })
// });

// app.get('/insert-pool', (req, res) => {
//   insertPool(pool, {
//     name:"Paty", firstName: "Sola",
//     secondName: "Zanches", edad:45,
//     email: "zanches@yahoo.com",
//     password: "er3rsagfhjy", id_nivel: 1},
//     result =>{
//     res.json(result);
//   })
// });


// app.get('/read', (req, res) => {
//   read(connection, result =>{
//     res.json(result);
//   })
// });

// app.get('/read-pool', (req, res) => {
//   readPool(pool, result =>{
//     res.json(result);
//   })
// });


// app.get('/update', (req, res) => {
//   update(connection,{id: 3}, result =>{
//     res.json(result);
//   })
// });

// app.get('/update-pool', (req, res) => {
//   updatePool(pool,{id: 3}, result =>{
//     res.json(result);
//   })
// });

// app.get('/remove', (req, res) => {
//   remove(connection,{id: 2}, result =>{
//     res.json(result);
//   })
// });

// app.get('/remove-pool', (req, res) => {
//   removePool(pool,{id: 2}, result =>{
//     res.json(result);
//   })
// });

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, ()=>{
  console.log('El puerto se le vanto en ' + port);
})

