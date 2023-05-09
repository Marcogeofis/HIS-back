const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom');

class BasicClass{
  constructor(){}

  async create(data){
    const newBasicClass = await models.BasicCourse.create(data)
    return newBasicClass;
  }

  async find(query){
    const options ={
      where:{},
    };

    const { section, chapter } = query;

    if (section){
      options.where.section = section;
      options.where.chapter = chapter;
    }

    const allBasicClass = await models.BasicCourse.findAll(options)
    return allBasicClass;
  }

  async findOne(id){
    const oneBasicClass = await models.BasicCourse.findByPK(id);
    if(!oneBasicClass){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return oneBasicClass;
  }




  async update(id, change){
    const oneBasicClass = await models.BasicCourse.findOne(id);
    const rta = await oneBasicClass.update(change);
    return rta;
  }

  async delete(id){
    const oneBasicClass = await this.findOne(id);
    await oneBasicClass.destroy();
    return { id };
  }
}

module.exports = BasicClass;
