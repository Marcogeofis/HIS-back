/* Cambiamos a pool por sequelize por que pool ya corre por detras de sequelize */
const { models } = require('../libs/sequelize');
const bcrypt = require('bcrypt');
// const pool = require('../libs/postgres.pool');

const boom = require('@hapi/boom');

// const getConnection = require('../libs/postgres');


class UserBB{
  constructor(){
  }

  async create(data){
    const hash = await bcrypt.hash(data.password, 10);
    const newData = {
      ...data,
      password: hash,
    };
    const newUser = await models.user.create(newData);
    delete newUser.dataValues.password;
    return newUser;

  }

  async find(query){
    const options = {
      include: ['Student'],
      where: {},
    };

    const {email} = query;
    if(email){
      options.where.email = email;
    }

    const user = await models.user.findAll(options);
    return user;

  }

  async findByEmail(email){
    const rta = await models.user.findOne({
      where: { email }
    });
    return rta;
  }

  async findOne(id){
    const user = await models.user.findByPk(id);
    if(!user){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return user;

  }

  async update(id, changes){
    const user = await this.findOne(id);
    const rta = await user.update(changes)
    return rta;

  }

  async delete(id){
    const user = await this.findOne(id);
    await user.destroy();
    return { id };

  }
}

module.exports = UserBB;
