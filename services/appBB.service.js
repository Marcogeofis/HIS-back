const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class AppBBProgress{
  constructor(){}

  async create(data){
    const newAppBB = await models.AppBB.create(data);
    return newAppBB;
  }

  async find(){
    const appBBResults = await models.AppBB.findAll();
    return appBBResults;
  }

  async findOne(id){
    const appBBResult = await models.AppBB.findByPk(id);
    if(!appBBResult){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return appBBResult;
  }

  async update(id, change){
    const appBBModify = await this.findOne(id);
    const rta = await appBBModify.update(change);
    return rta;
  }

  async delete(id){
    const appBBResult = await this.findOne(id);
    await appBBResult.destroy();
    return { id };
  }

}
module.exports = AppBBProgress;
