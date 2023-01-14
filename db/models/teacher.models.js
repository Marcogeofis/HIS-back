const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = require('./user.models');
const TEACHER_TABLE = 'teacher';

const teacherSchema ={
  id:{
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
  phone:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Ingresa tu número'
  },
  contract: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'active'
  },
  endContract: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'fecha del fin del contrato',
    field: 'Fin_del_contrato'
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

class Teacher extends Model{
  static associate(models){
    this.belongsTo(models.user, {
      as: 'user'
    }),

    this.hasOne(models.ClassOfCourse, {
      as: 'classOfCourse',
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


