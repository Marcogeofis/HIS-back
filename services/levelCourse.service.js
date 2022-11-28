const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class LevelCourse{
  constructor(){}

  async create(data){
    const newLevelCourse = await models.LevelCourse.create(data)
    return newLevelCourse;
  }

  async find(query){
    const options = {
      where: {},
    }

    const { limit, offset } = query;
    if(limit && offset){
      options.limit = limit;
      options.offset = offset;
    }

    const { chapter } = query;
    if(chapter){
      options.where.chapter = chapter;
    }
    const levelCourses = await models.LevelCourse.findAll(options);
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
