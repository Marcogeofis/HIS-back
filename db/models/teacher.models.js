const { Model, DataTypes, Sequelize } = require('sequelize');

const TEACHER_TABLE = 'teacher';

const teacherSchema ={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  name:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName:{
    field: 'last_name',
    allowNull: false,
    type: DataTypes.STRING,
  },
  email:{
    allowNull: false,
    type: DataTypes.STRING,
    unique:true,
  },
  password:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  role:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'teacher'
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
}

class Teacher extends Model{
  static associate(models){
    this.hasOne(models.ClassOfCourse, {
      as: 'classOfCourse',
      foreignKey: 'teacherId',
    });

    this.hasOne(models.TeacherProgress, {
      as: 'teacherProgres',
      foreignKey: 'teacherId',
    });

    this.hasOne(models.Schedule, {
      as: 'teacherSchedule',
      foreignKey: 'teacherId',
    });

  }
  static config(sequelize){
    return {
      sequelize,
      tableName: TEACHER_TABLE,
      modelName: 'Teacher',
      timestamps: false,
    }
  }
}

module.exports ={ TEACHER_TABLE, teacherSchema, Teacher };


/*
 esto lo tenemos que agregar al eschema para poder hacer la recuperacionde contraseña

password:{
    field: 'recovery_token',
    allowNull: true,
    type: DataTypes.STRING,
  },


 */
