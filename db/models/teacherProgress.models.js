const { Model, DataTypes, Sequelize } = require('sequelize');

const TEACHERPROGRESS_TABLE = 'teacherProgress';

const teacherProgressSchema = {
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
  teacherMail:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  actitud:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  comunication:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  patient:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  suggestion:{
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

class TeacherProgress extends Model{
  static associate(){
    //associate
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: TEACHERPROGRESS_TABLE,
      modelName: 'TeacherProgress',
      timestamps: false,
    }
  }
}

module.exports ={ TEACHERPROGRESS_TABLE, teacherProgressSchema, TeacherProgress };
