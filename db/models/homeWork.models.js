const { Model, DataTypes, Sequelize } = require('sequelize');

const HOMEWORK_TABLE = 'homeWork';

const homeWorkSchema ={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  studentMail:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  chapter:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  video:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  audio:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class HomeWork extends Model{
  static associate(){
    //associate
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: HOMEWORK_TABLE,
      modelName: 'Homework',
      timestamps: false,
    }
  }
}

module.exports ={ HOMEWORK_TABLE, homeWorkSchema, HomeWork }
