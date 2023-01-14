const { Model, DataTypes, Sequelize } = require('sequelize');

const STUDENT_TABLE = require('./student.models');
const EVALUATION_STUDENT_TABLE = 'evaluationStudent';

const evaluationStudentSchema ={
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
  section:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  nameOfStudent: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'student'
  },
  listening:{
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  speaking:{
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  reading:{
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  writing:{
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  participation:{
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  homeworks:{
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  status:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  studentId:{
    field: 'student_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    reference:{
      models: STUDENT_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class EvaluationStudent extends Model{
  static associate(models){
    this.belongsTo(models.Student, { as: 'student' });
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: EVALUATION_STUDENT_TABLE,
      modelName: 'EvaluationStudent',
      timestamps: false,
    }
  }
}

module.exports ={ EVALUATION_STUDENT_TABLE, evaluationStudentSchema, EvaluationStudent};
