const { Model, DataTypes, Sequelize } = require('sequelize');

const ROLLPLAY_TABLE = 'rollPlays';

const rollPlayAudioSchema ={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  course:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Nivel del curso',
  },
  section:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Apartado del curso',
  },
  chapter:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'tema relacionado',
  },
  audio1:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'ruta del audio',
  },
  audio2:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'ruta del audio',
  },
  audio3:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'ruta del audio',
  },
  audio4:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'ruta del audio',
  },
  audio5:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'ruta del audio',
  },
  context:{
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Contexto del audio',
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
}

class RollPlayAudios extends Model{

  static associate(){
    // si hay relación con una tabla aquí va
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: ROLLPLAY_TABLE,
      modelName: 'RollPlays',
      timestamps: false,
    }
  }
}

module.exports ={ ROLLPLAY_TABLE, rollPlayAudioSchema, RollPlayAudios };
