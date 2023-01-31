const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom');

class AdvanceClass{
  constructor(){}

  async create(data){
    const newAdvanceClass = await models.AdvanceCourse.create(data)
    return newAdvanceClass;
  }

  async find(){
    const allAdvanceClass = await models.AdvanceCourse.findAll()
    return allAdvanceClass;
  }

  async findOne(id){
    const oneAdvanceClass = await models.AdvanceCourse.findByPK(id);
    if(!oneAdvanceClass){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return oneAdvanceClass;
  }




  async update(id, change){
    const oneAdvanceClass = await models.AdvanceCourse.findOne(id);
    const rta = await oneAdvanceClass.update(change);
    return rta;
  }

  async delete(id){
    const oneAdvanceClass = await this.findOne(id);
    await oneAdvanceClass.destroy();
    return { id };
  }
}

module.exports = AdvanceClass;
