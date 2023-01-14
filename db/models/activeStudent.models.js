const { Model, DataTypes, Sequelize } = require('sequelize');

const STUDENT_TABLE=require('./student.models')
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
  modalidad:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue:'modalidad del curso',
  },
  status:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue:'false',
  },
  curso:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Basic A',
  },
  costo:{
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  descuento:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: '10%',
  },
  claveDescuento:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'aprovechamiento',
  },
  totalCosto:{
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  fechaDePago:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'dia que se realizó el pago',
  },
  inicioPeriodo:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'el periodo del curso inicia',
  },
  finPeriodo:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'el periodo del curso termina',
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
