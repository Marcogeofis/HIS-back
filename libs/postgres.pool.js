const { Pool } = require('pg');

const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
console.log(URI)
const pool = new Pool({ connectionString: URI });

/**
 *SUSTITUIMOS EL POOL DE ABAJO POR EL NUEVO POOL

 const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'antri',
    password: 'bbstart',
    database: 'my_schoolbb'
  });

 */

module.exports = pool;
