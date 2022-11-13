const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class ScheduleBB{
  constructor(){}

  async create(data){
    const newSchedule = await models.Schedule.create(data)
    return newSchedule;
  }

  async find(){
    const allSchedule = await models.Schedule.findAll();
    return allSchedule;
  }

  async findOne(id){
    const schedule = await models.Schedule.findByPk(id);
    if(!schedule){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return schedule;
  }

  async update(id, change){
    const schedule = await this.findOne(id);
    const rta = await schedule.update(change);
    return rta;
  }

  async delete(id){
    const schedule = await this.findOne(id);
    await schedule.destroy();
    return { id };
  }
}

module.exports = ScheduleBB;
