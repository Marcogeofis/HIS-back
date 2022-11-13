const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class LevelCourse{
  constructor(){}

  async create(data){
    const newLevelCourse = await models.LevelCourse.create(data)
    return newLevelCourse;
  }

  async find(){
    const levelCourses = await models.LevelCourse.findAll();
    return levelCourses;
  }

  async findOne(id){
    const levelCourse = await models.LevelCourse.findByPk(id);
    if(!levelCourse){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return levelCourse;
  }

  async update(id, change){
    const levelCourse = await this.findOne(id);
    const rta = await levelCourse.update(change);
    return rta;
  }

  async delete(id){
    const levelCourse = await this.findOne(id);
    await levelCourse.destroy();
    return { id };
  }
}

module.exports = LevelCourse;
