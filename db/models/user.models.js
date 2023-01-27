const { Model, DataTypes, Sequelize } = require('sequelize');


const USER_TABLE = 'user';

const userBBSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
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
  role: {
    allowNull: true,
    type: DataTypes.STRING,
    defaultValue: 'student'
  },
  recoveryToken:{
    field: 'recovery_token',
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },

}

class User extends Model{

  static associate(models){
    this.hasOne(models.Student, {
      as: 'Student',
      foreignKey: 'userId',
    });

    // this.hasOne(models.Teacher, {
    //   as: 'Teacher',
    //   foreignKey: 'userId',
    // });
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'user',
      timestamps: false,
    }
  }
}

module.exports ={ USER_TABLE, userBBSchema, User}
