const { Model, DataTypes, Sequelize } = require('sequelize');

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
  },
  phone:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue:'student',
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  studentId: {
    field: 'student_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    reference: {
      model: STUDENT_TABLE,
      key: 'id'
    }
  },
}

class Student extends Model{
  static associate(models){
    this.hasOne(models.statusStudent, {
      as: 'stateStudent',
      foreignKey: 'studentId',
    });

    this.hasOne(models.ClassOfCourse, {
      as: 'classOfCourse',
      foreignKey: 'studentId'
    });

    this.hasOne(models.EvaluationStudent, {
      as: 'evaluationStudent',
      foreignKey: 'studentId'
    })
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
