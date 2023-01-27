const { Model, DataTypes, Sequelize } = require('sequelize');

const APPBB_TABLE = 'appBB';

const appBBSchema ={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  like: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  nolike: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  suggestions: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  meRecomiendas:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
}

class AppBB extends Model{
  static associate(){
    //associate
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: APPBB_TABLE,
      modelName: 'AppBB',
      timestamps: false,
    }
  }
}

module.exports ={ APPBB_TABLE, appBBSchema, AppBB };
