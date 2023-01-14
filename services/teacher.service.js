const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

class Teacher{
  constructor(){}

  async create(data){
    const hash = await bcrypt.hash(data.user.password, 10)
    const newData = {
      ...data,
      user: {
        ...data.user,
        password: hash
      }
    };
    const newTeacher = await models.Teacher.create(newData, {
      include: ['user'],
    });
    delete newTeacher.user.dataValues.password;
    return newTeacher;

  }

  async find(query){

    const options = {
      include: ['classOfCourse', 'teacherSchedule', 'user'],
      where: {},
    };

    const { limit, offset } = query;
    if(limit && offset){
      options.limit = limit;
      options.offset = offset;
    }

    const { lastName } = query;
    if(lastName){
      options.where.lastName = lastName;
    }

    const teachers = await models.Teacher.findAll(options);
    return teachers;
  }

  async findByEmail(email){
    const rta = await models.Teacher.findOne({
      where: { email }
    });
    return rta;
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
