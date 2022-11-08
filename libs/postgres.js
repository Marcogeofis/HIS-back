/**
 * Con esto tenemos ya la conexion a mi base de datos con postgres pero
 * no es la mejor practica requerimos el uso de pool para controlar los
 * rquest que se hagan a mi api o db. Para ello creamos otro archivo para pool.
 */

const { Client } = require('pg');

async function getConnection(){
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'antri',
    password: 'bbstart',
    database: 'my_schoolbb'
  });

  await client.connect();
  return client;
}

module.exports = getConnection;
