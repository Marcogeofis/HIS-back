const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class AllVocabulary{
  constructor(){}

  async create(data){
    const word = await models.Vocabulary.create(data);
    return word;
  }

  async find(query){
    const options = {
      include: ['levelCorse'],
      where: {},
    };

    const { limit, offset } = query;
    if(limit && offset){
      options.limit = limit;
      options.offset = offset;
    }

    const  { word } = query;
    if(word){
      options.where.word = word;
    }

    const allWords = await models.Vocabulary.findAll(options);
    return allWords;
  }

  async findOne(id){
    const word = await models.Vocabulary.findByPk(id);
    if(!word){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return word;
  }

  async update(id, change){
    const word = await this.findOne(id);
    const rta = await word.update(change);
    return rta;
  }

  async delete(id){
    const word = await this.findOne(id);
    await word.destroy();
    return { id };
  }
}

module.exports = AllVocabulary ;
