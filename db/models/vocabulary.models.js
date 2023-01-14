const { Model, DataTypes, Sequelize } = require('sequelize');

const VOCABULARY_TABLE = 'vocabulary';

const vocabularySchema = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  word:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  wordImage:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  wordAudio:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  exampleAudio: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  exampleWrited1: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'example 1',
  },
  exampleWrited2: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'example 2',
  },
  exampleWrited3: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'example 3',
  },
  synonymous: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  antonyms: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  theoryOfWord: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'definition'
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Vocabulary extends Model{
  static associate(){

  }
  static config(sequelize){
    return {
      sequelize,
      tableName: VOCABULARY_TABLE,
      modelName: 'Vocabulary',
      timestamps: false,
    }
  }
}

module.exports ={ VOCABULARY_TABLE, vocabularySchema, Vocabulary };
