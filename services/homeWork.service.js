const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class StudentHomework{
  constructor(){}

  async create(data){
    const newHomework = await models.Homework.create(data);
    return newHomework;
  }

  async find(){
    const homeWorks = await models.Homework.findAll();
    return homeWorks;
  }

  async  findOne(id){
    const homeWork = await models.Homework.findByPk(id);
    if(!homeWork){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return homeWork;
  }

  async update(id, change){
    const homeWork = await this.findOne(id);
    const rta = await homeWork.update(change);
    return rta;
  }


  async delete(id){
    const homeWork = await this.findOne(id);
    await homeWork.destroy();
    return { id };
  }

}


module.exports = StudentHomework;
