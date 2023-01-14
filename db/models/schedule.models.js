const { Model, DataTypes, Sequelize } = require('sequelize');
const TEACHER_TABLE = require('./teacher.models');
const SCHEDULE_TABLE = 'schedule';

const scheduleSchema ={
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
  hrs: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  start: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  end: {
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
}

class Schedule extends Model{
  static associate(models){
    this.belongsTo(models.Teacher, { as: 'teacher' });
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: SCHEDULE_TABLE,
      modelName: 'Schedule',
      timestamps: false,
    }
  }
}

module.exports ={ SCHEDULE_TABLE, scheduleSchema, Schedule }
