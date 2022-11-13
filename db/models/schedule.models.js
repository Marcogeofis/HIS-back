const { Model, DataTypes, Sequelize } = require('sequelize');

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
  teacherMail: {
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
  period: {
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

class Schedule extends Model{
  static associate(){
    //associate
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
