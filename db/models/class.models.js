const { Model, DataTypes, Sequelize } = require('sequelize');

const STUDENT_TABLE = require('./student.models');
const TEACHER_TABLE = require('./teacher.models');

const CLASSOFCOURSE_TABLE = 'classOfCourse';

const classOfCourseSchema ={
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
  day:{
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
  teacherId: {
    field: 'teacher_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    reference:{
      models: TEACHER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  studentId: {
    field: 'student_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    reference: {
      model: STUDENT_TABLE,
      key: 'id',
    }
  },

}

class ClassOfCourse extends Model{

  static associate(models){
    this.belongsTo(models.Student, {as: 'student'});
    this.belongsTo(models.Teacher, {as: 'teacher'});
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
