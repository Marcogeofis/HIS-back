  const { Model, DataTypes, Sequelize } = require('sequelize');

  const COURSES_TABLE = 'courses';

  const coursesSchema ={
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    level:{
      allowNull: false,
      type: DataTypes.STRING,
    },
    cost:{
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    classSpecial: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    createdAt:{
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: Sequelize.NOW
    }
  }

  class Courses extends Model{
    static associate(){
      //associate
    }
    static config(sequelize){
      return {
        sequelize,
        tableName: COURSES_TABLE,
        modelName: 'Courses',
        timestamps: false,
      }
    }
  }

  module.exports ={ COURSES_TABLE, coursesSchema , Courses }
