const { Model, DataTypes, Sequelize } = require('sequelize');

const BASICCLASS_TABLE = 'basicClass';

const basicCourseSchema ={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  course: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Level of course',
  },
  section: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'section of the course',
  },
  chapter: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Chapter',
  },
  video: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'path of video',
  },
  point1: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Chapter´s resume',
  },
  point2: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Chapter´s resume',
  },
  point3: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Chapter´s resume',
  },
  point4: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Chapter´s resume',
  },
  point5: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Chapter´s resume',
  },
  context: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Context of the Chapter',
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class BasicCourseclass extends Model{

  static associate(){
    // this.belongsTo(models.Teacher, {as: 'teacher'});
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: BASICCLASS_TABLE,
      modelName: 'BasicCourse',
      timestamps: false,
    }
  }
}

module.exports ={ BASICCLASS_TABLE, basicCourseSchema, BasicCourseclass };
