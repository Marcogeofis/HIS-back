const { Model, DataTypes, Sequelize } = require('sequelize');

const PHONETIC_TABLE = 'phonetic';

const phoneticSoundsSchema = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  symbol:{
    allowNull:false,
    type: DataTypes.STRING,
    defaultValue: 'Simbolo'
  },
  image:{
    allowNull:false,
    type: DataTypes.STRING,
    defaultValue: 'Imagen del simbolo'
  },
  audio:{
    allowNull:false,
    type: DataTypes.STRING,
    defaultValue: 'ruta del audio'
  },
  example1:{
    allowNull:false,
    type: DataTypes.STRING,
    defaultValue: 'Ejemplo'
  },
  example2:{
    allowNull:false,
    type: DataTypes.STRING,
    defaultValue: 'Ejemplo'
  },
  example3:{
    allowNull:false,
    type: DataTypes.STRING,
    defaultValue: 'Ejemplo'
  },
  example4:{
    allowNull:false,
    type: DataTypes.STRING,
    defaultValue: 'Ejemplo'
  },
  context:{
    allowNull:false,
    type: DataTypes.STRING,
    defaultValue: 'Breve explicacón del simbolo'
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class PhoneticSounds extends Model{
  static associate(){

  }
  static config(sequelize){
    return {
      sequelize,
      tableName: PHONETIC_TABLE,
      modelName: 'phoneticSounds',
      timestamps: false,
    }
  }
}

module.exports ={ PHONETIC_TABLE, phoneticSoundsSchema, PhoneticSounds };
