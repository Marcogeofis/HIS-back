const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class PhoneticTable{
  constructor(){}

  async create(data){
    const sound = await models.phoneticSounds.create(data);
    return sound;
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

    const  { sound } = query;
    if(sound){
      options.where.sound = sound;
    }

    const allSounds = await models.phoneticSounds.findAll(options);
    return allSounds;
  }

  async findOne(id){
    const sound = await models.phoneticSounds.findByPk(id);
    if(!sound){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return sound;
  }

  async update(id, change){
    const soundChange = await this.findOne(id);
    const rta = await soundChange.update(change);
    return rta;
  }

  async delete(id){
    const sound = await this.findOne(id);
    await sound.destroy();
    return { id };
  }
}

module.exports = PhoneticTable ;
