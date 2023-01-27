const { Model, DataTypes, Sequelize } = require('sequelize');


const CLASSOFCOURSE_TABLE = 'classOfCourse';

const classOfCourseSchema ={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nivel:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  seccion:{
    allowNull: false,
    type: DataTypes.STRING,
    field: 'sección',
  },
  teacherId: {
    field: 'teacher_id',
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  teacherName:{
    allowNull: false,
    type: DataTypes.STRING,
    field: 'teacher',
  },
  periodo:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  clasesEnVivo:{
    allowNull: false,
    type: DataTypes.STRING,
    field: 'clases_en_vivo',
  },
  horario:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  dayExam:{
    allowNull: false,
    type: DataTypes.STRING,
    field: 'dia_del_examen',
  },
  hourExam:{
    allowNull: false,
    type: DataTypes.STRING,
    field: 'hora_del_examen',
  }
}

class ClassOfCourse extends Model{

  static associate(){
    // this.belongsTo(models.Teacher, {as: 'teacher'});
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
