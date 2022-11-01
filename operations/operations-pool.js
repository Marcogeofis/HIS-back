const mysql = require('mysql');

function insertPool(pool, data, callback){

  let insertQuery = "insert into Student (name, firstName, secondName, edad, email, password, id_nivel) values (?, ?, ?, ?, ?, ?, ?)";
  let query = mysql.format(insertQuery, [data.name, data.firstName, data.secondName, data.edad, data.email, data.password, data.id_nivel])
  pool.getConnection(function(err, connection){
    if(err) throw err;
    connection.query(query, function(err, result){
      if (err) throw err;
      callback(result);

      connection.release();
    });
  })




}

function readPool(pool, callback){

  pool.getConnection(function(err, connection){
    if(err) throw err;
    connection.query('SELECT * FROM Student', function(err, result){
      if (err) throw err;
      callback(result);

      connection.release();
    });
  })
}

// digamos que queremos actualizar un correo o cualquier dato

function updatePool(pool, data, callback){
  const randomLetters = Math.random().toString(36).substring(7);
  const newEmail = `${randomLetters}@gmail.com`;
  let updateQuery = "UPDATE Student set email= ? where id= ?";
  let query = mysql.format(updateQuery, [newEmail, data.id]);

  pool.getConnection(function(err, connection){
    if(err) throw err;
    connection.query(query, function(err, result){
      if (err) throw err;
      callback(result);

      connection.release();
    });
  })
}


function removePool(pool, data, callback){
  let removeQuery = "DELETE FROM Student WHERE id=?";
  let query = mysql.format(removeQuery, [data.id])

  pool.getConnection(function(err, connection){
    if(err) throw err;
    connection.query(query, function(err, result){
      if (err) throw err;
      callback(result);

      connection.release();
    });
  })
}

module.exports = {insertPool, readPool, updatePool, removePool};
