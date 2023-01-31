const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom');

class IntermediateClass{
  constructor(){}

  async create(data){
    const newIntermediateClass = await models.IntermediateCourse.create(data)
    return newIntermediateClass;
  }

  async find(){
    const allIntermediateClass = await models.IntermediateCourse.findAll()
    return allIntermediateClass;
  }

  async findOne(id){
    const oneIntermediateClass = await models.IntermediateCourse.findByPK(id);
    if(!oneIntermediateClass){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return oneIntermediateClass;
  }




  async update(id, change){
    const oneIntermediateClass = await models.IntermediateCourse.findOne(id);
    const rta = await oneIntermediateClass.update(change);
    return rta;
  }

  async delete(id){
    const oneIntermediateClass = await this.findOne(id);
    await oneIntermediateClass.destroy();
    return { id };
  }
}

module.exports = IntermediateClass;
