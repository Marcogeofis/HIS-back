const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models'); // traera el index automaticamente


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

setupModels(sequelize);

// quitamos esta linea  sequelize.sync() para poder la migración
// sequelize.sync();

module.exports = sequelize;
