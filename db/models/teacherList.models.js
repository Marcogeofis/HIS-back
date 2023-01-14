const { Model, DataTypes, Sequelize } = require('sequelize');

const TEACHERLIST_TABLE = 'teacherList';

const teacherListSchema ={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  degree:{
    allowNull:false,
    type: DataTypes.STRING,
  },
  section:{
    allowNull:false,
    type: DataTypes.STRING,
  },
  teacherId:{
    allowNull:false,
    type: DataTypes.INTEGER,
  },
  nameOfTeacher:{
    allowNull:false,
    type: DataTypes.STRING,
    field: 'teacher',
  },
  studentId:{
    allowNull:false,
    type: DataTypes.INTEGER,
  },
  nameOfStudent:{
    allowNull:false,
    type: DataTypes.STRING,
    field: 'student',
  },
  mail:{
    allowNull:false,
    type: DataTypes.STRING,
  },
  period:{
    allowNull:false,
    type: DataTypes.STRING,
  },
  scheduleOf:{
    allowNull:false,
    type: DataTypes.STRING,
    field: 'hora_de_la_clase'
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
}

class TeacherListOfStudents extends Model{
  static associate(models){

  }
  static config(sequelize){
    return {
      sequelize,
      tableName: TEACHERLIST_TABLE,
      modelName: 'teacherListOfStudents',
      timestamps: false,
    }
  }
}

module.exports ={ TEACHERLIST_TABLE, teacherListSchema, TeacherListOfStudents };


/*
 esto lo tenemos que agregar al eschema para poder hacer la recuperacion de contraseña

password:{
    field: 'recovery_token',
    allowNull: true,
    type: DataTypes.STRING,
  },


 */
