const { Model, DataTypes, Sequelize } = require('sequelize');

const TEACHER_TABLE = 'teacher';

const teacherSchema ={
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
  email:{
    allowNull: false,
    type: DataTypes.STRING,
    unique:true,
  },
  password:{
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

class Teacher extends Model{
  static associate(){
    //associate
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
