const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class ActiveRegister{
  constructor(){}

  async create(data){
    const newActiveStudent = await models.statusStudent.create(data);
    return newActiveStudent;
  }

  async find(){
    const allActiveStudents = await models.statusStudent.findAll({
      include: ['student'],
    });
    return allActiveStudents;
  }

  async  findOne(id){
    const activeStudent = await models.statusStudent.findByPk(id);
    if(!activeStudent){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return activeStudent;
  }

  async update(id, change){
    const activeStudent = await this.findOne(id);
    const rta = await activeStudent.update(change);
    return rta;
  }


  async delete(id){
    const activeStudent = await this.findOne(id);
    await activeStudent.destroy();
    return { id };
  }

}


module.exports = ActiveRegister;
