const { Model, DataTypes, Sequelize } = require('sequelize');

const TEACHER_TABLE = require('./teacher.models');
const TEACHERPROGRESS_TABLE = 'teacherProgress';

const teacherProgressSchema = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  attitude:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  communication:{
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
  },
  teacherId:{
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

class TeacherProgress extends Model{
  static associate(models){
    this.belongsTo(models.Teacher, { as: 'teacher' })
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
