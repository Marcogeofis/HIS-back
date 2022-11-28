const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');
const { query } = require('express');

class RollPlays{
  constructor(){}

  async create(data){
    const newRollPlay = await models.RollPlays.create(data);
    return newRollPlay;
  }

  async find(query){
    const options = {
      where: {},
    };

    const { limit, offset } = query;
    if(limit && offset){
      options.limit = limit;
      options.offset = offset;
    }

    const { topic } = query;
    if(topic){
      options.where.topic = topic;
    }
    const rollPlays = await models.RollPlays.findAll(options);
    return rollPlays;
  }

  async  findOne(id){
    const rollPlay = await models.RollPlays.findByPk(id);
    if(!rollPlay){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return rollPlay;
  }

  async update(id, change){
    const rollPlay = await this.findOne(id);
    const rta = await rollPlay.update(change);
    return rta;
  }


  async delete(id){
    const rollPlay = await this.findOne(id);
    await rollPlay.destroy();
    return { id };
  }

}


module.exports = RollPlays;
