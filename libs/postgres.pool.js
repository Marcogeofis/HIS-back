const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'antri',
    password: 'bbstart',
    database: 'my_schoolbb'
  });

module.exports = pool;
