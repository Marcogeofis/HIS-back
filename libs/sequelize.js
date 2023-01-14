const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models'); // traera el index automaticamente

const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : true,
}

if (config.isProd){
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
}
const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);

// quitamos esta linea  sequelize.sync() para poder la migración
// sequelize.sync();

module.exports = sequelize;
