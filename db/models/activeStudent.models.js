const { Model, DataTypes, Sequelize } = require('sequelize');


const ACTIVESTUDENT_TABLE = 'activeStudent';

const activeStudentSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
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
  status:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue:'false',
  },
  course:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Curso Básico',
  },
  discount:{
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  totalCost:{
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
}

class ActiveStudent extends Model{

  static associate(models){
    this.belongsTo(models.Student, {as: 'student'})
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: ACTIVESTUDENT_TABLE,
      modelName: 'statusStudent',
      timestamps: false,
    }
  }
}

module.exports ={ ACTIVESTUDENT_TABLE, activeStudentSchema, ActiveStudent}
