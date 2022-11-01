const mysql = require('mysql');

function insert(connection, data, callback){

  let insertQuery = "insert into Student (name, firstName, secondName, edad, email, password, id_nivel) values (?, ?, ?, ?, ?, ?, ?)";
  let query = mysql.format(insertQuery, [data.name, data.firstName, data.secondName, data.edad, data.email, data.password, data.id_nivel])
  connection.query(query, function(err, result){
    if (err) throw err;
    callback(result);
  });

  connection.end()
}

function read(connection, callback){

  connection.query('SELECT * FROM Student', function(err, result){
    if (err) throw err;
    callback(result);
  });
  connection.end()
}

// digamos que queremos actualizar un correo o cualquier dato

function update(connection, data, callback){
  const randomLetters = Math.random().toString(36).substring(7);
  const newEmail = `${randomLetters}@gmail.com`;
  let updateQuery = "UPDATE Student set email= ? where id= ?";
  let query = mysql.format(updateQuery, [newEmail, data.id]);

  connection.query(query, function(err, result){
    if (err) throw err;
    callback(result);
  });
  connection.end()
}


function remove(connection, data, callback){
  let removeQuery = "DELETE FROM Student WHERE id=?";
  let query = mysql.format(removeQuery, [data.id])

  connection.query(query, function(err, result){
    if(err) throw err;
    callback(result);
  });
  connection.end()
}

module.exports = {insert, read, update, remove};

/**
 * para no hacer que nuestra funcion ingrese los valores de manera hackeada lo haremos manualmente
 * cuando llamemos la funcion insert
 *
 * let insertQuery = "insert into Student (name, firstName, secondName, edad, email, password, id_nivel) values ('Pablo', 'Vega', 'Perez', 32, 'pablovega@hotmail.com', 'sd342ndsanf', 1);";
 */
