const { Model, DataTypes, Sequelize } = require('sequelize');

const CLASSOFCOURSE_TABLE = 'classOfCourse';

const classOfCourseSchema ={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  id_period:{
    allowNull: false,
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
  teacherMail: {
    allowNull: false,
    type: DataTypes.STRING,},
  studentMail: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  classBegins: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  classEnds: {
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

class ClassOfCourse extends Model{
  static associate(){
    //associate
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: CLASSOFCOURSE_TABLE,
      modelName: 'ClassOfCourse',
      timestamps: false,
    }
  }
}

module.exports ={ CLASSOFCOURSE_TABLE, classOfCourseSchema, ClassOfCourse};
