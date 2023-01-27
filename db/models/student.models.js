const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = require('./user.models');
const STUDENT_TABLE = 'student';

const studentSchema ={
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name',
  },
  age: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  phone:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue:'teléfono',
  },
  goal:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue:'objetivo',
  },
  photo:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue:'ruta-foto',
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    reference: {
      model: USER_TABLE,
      key: 'id'
    }
  },

}

class Student extends Model{
  static associate(models){
    this.belongsTo(models.user, {
      as: 'user'
    }),

    this.hasOne(models.statusStudent, {
      as: 'statusUser',
      foreignKey: 'studentId',
    });

    this.hasOne(models.EvaluationStudent, {
      as: 'evaluationStudent',
      foreignKey: 'studentId'
    });

    /**
     *  this.hasOne(models.ClassOfCourse, {
      as: 'classOfCourse',
      foreignKey: 'teacherId',
    });

    this.hasOne(models.Schedule, {
      as: 'teacherSchedule',
      foreignKey: 'teacherId',
    });
     */
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: STUDENT_TABLE,
      modelName: 'Student',
      timestamps: false,
    }
  }
}

module.exports ={ STUDENT_TABLE, studentSchema, Student}
