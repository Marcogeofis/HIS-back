const { Model, DataTypes, Sequelize } = require('sequelize');

const TEACHERPROGRESS_TABLE = 'teacherProgress';

const teacherProgressSchema = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  teacher:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  curso:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  calificacion:{
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  mejoras:{
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

class TeacherProgress extends Model{
  static associate(models){

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
