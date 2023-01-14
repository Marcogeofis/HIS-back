  const { Model, DataTypes, Sequelize } = require('sequelize');

  const COURSES_TABLE = 'courses';

  const coursesSchema ={
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    tipoDeCurso: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'tipo_de_curso',
    },
    nivelBasico: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'nivel_basico',
    },
    costoBasico: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'costo_del_basico',
    },
    nivelIntermedio: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'nivel_intermedio',
    },
    costoIntermedio: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'costo_del_intermedio',
    },
    nivelAvanzado: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'nivel_avanzado',
    },
    costoAvanzado: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'costo_del_avanzado',
    },
    claseExtraordinaria: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'clase_extra'
    },
    costoClaseExtra: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'costo_claseExtraordinaria',
    },
    examenExtraordi: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'examen_extraordinario'
    },
    costoExamenExtraordi: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'costo_examenExtraordinario'
    },
    createdAt:{
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: Sequelize.NOW
    }
  }

  class Courses extends Model{
    static associate(){
      //associate
    }
    static config(sequelize){
      return {
        sequelize,
        tableName: COURSES_TABLE,
        modelName: 'Courses',
        timestamps: false,
      }
    }
  }

  module.exports ={ COURSES_TABLE, coursesSchema , Courses }
