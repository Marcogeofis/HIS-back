const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');
// const bcrypt = require('bcrypt');

class TeacherList{
  constructor(){}

  async create(data){
    const newStudentOfTeacher = await models.teacherListOfStudents.create(data);
    return newStudentOfTeacher;
  }

  async find(query){

    const options = {
      where: {},
    };

    const { limit, offset } = query;
    if(limit && offset){
      options.limit = limit;
      options.offset = offset;
    }

    const { period } = query;
    if(period){
      options.where.period = period;
    }

    const teachers = await models.teacherListOfStudents.findAll(options);

    return teachers;

  }

  async findByEmail(email){
    const rta = await models.teacherListOfStudents.findOne({
      where: { email }
    });
    return rta;
  }

  async findOne(id){
    const studentOfTeacher = await models.teacherListOfStudents.findByPk(id);
    if(!studentOfTeacher){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return studentOfTeacher;

  }

  async update(id, change){
    const studentOfTeacher = await this.findOne(id);
    const rta = await studentOfTeacher.update(change);
    return rta;
  }

  async delete(id){
    const studentOfTeacher = await this.findOne(id);
    await studentOfTeacher.destroy();
    return { id };
  }
}

module.exports = TeacherList;
