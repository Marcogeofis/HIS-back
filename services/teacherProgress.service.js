const teacherProgressData = [{
  id: "1",
  teacherMail: "rhcpb85@hotmail.com",
  actitud:"Good",
  comunication: "Good",
  patient: "Very good",
  suggestion:"que el profesor sea más dinámico",
}]
const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class teacherProgress{
  constructor(){}

  async create(data){
    const newProgressTeacher = await models.TeacherProgress.create(data)
    return newProgressTeacher;
  }

  async find(){
    const allProgressTeachers = await models.TeacherProgress.findAll()
    return allProgressTeachers;
  }

  async findOne(id){
    const progressTeacher = await models.TeacherProgress.findByPk(id);
    if(!progressTeacher){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return progressTeacher;
  }

  async update(id, change){
    const progressTeacher = await this.findOne(id);
    const rta = await progressTeacher.update(change);
    return rta;
  }

  async delete(id){
    const progressTeacher = await this.findOne(id);
    await progressTeacher.destroy();
    return { id };
  }
}

module.exports = teacherProgress;
