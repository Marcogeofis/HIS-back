const { Model, DataTypes, Sequelize } = require('sequelize');

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
  name:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  studentMail:{
    allowNull: false,
    type: DataTypes.STRING,
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
}

class EvaluationStudent extends Model{
  static associate(){
    //associate
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
