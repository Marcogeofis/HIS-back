const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom');

class ClassToCourse{
  constructor(){}

  async create(data){
    const newClass = await models.ClassOfCourse.create(data);
    return newClass;
  }

  async find(){
    const allClass = await models.ClassOfCourse.findAll();
    return allClass;
  }

  async findOne(id){
    const oneClass = await models.ClassOfCourse.findByPk(id);
    if(!oneClass){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return oneClass;
  }

  async update(id, change){
    const oneClass = await this.findOne(id);
    const rta = await oneClass.update(change);
    return rta;
  }

  async delete(id){
    const oneClass = await this.findOne(id);
    await oneClass.destroy();
    return { id };
  }
}

module.exports = ClassToCourse;
