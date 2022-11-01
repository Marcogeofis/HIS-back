const express = require('express');
const app = express();
const port = 3000;
const routerApi = require('./router');
// const mysql = require('mysql');
// const { insert, read, update, remove } = require('./operations/operations');
// const { insertPool, readPool, updatePool, removePool } = require('./operations/operations-pool');

// require("dotenv").config();

app.use(express.json());

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

routerApi(app)

app.listen(port, ()=>{
  console.log('El puerto se le vanto en ' + port);
})

