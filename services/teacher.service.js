const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class Teacher{
  constructor(){}

  async create(data){
    const newTeacher = await models.Teacher.create(data);
    return newTeacher;
  }

  async find(){
    const teachers = await models.Teacher.findAll();
    return teachers;
  }

  async findOne(id){
    const teacher = await models.Teacher.findByPk(id);
    if(!teacher){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return teacher;

  }

  async update(id, change){
    const teacher = await this.findOne(id);
    const rta = await teacher.update(change);
    return rta;
  }

  async delete(id){
    const teacher = await this.findOne(id);
    await teacher.destroy();
    return { id };
  }
}

module.exports = Teacher;
