const { Model, DataTypes, Sequelize } = require('sequelize');

const LEVELCOURSE_TABLE = 'levelCourse';

const levelCourseSchema ={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  degree:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  gradeSection:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  nameChapter:{
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
  image:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  vocabulary:{
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

class LevelCourse extends Model{
  static associate(){
    //associate
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: LEVELCOURSE_TABLE,
      modelName: 'LevelCourse',
      timestamps: false,
    }
  }
}

module.exports ={ LEVELCOURSE_TABLE, levelCourseSchema, LevelCourse}
