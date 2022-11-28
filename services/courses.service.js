const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

// mi objeto CoursesService
class AllCourses {
  constructor(){}

  async create(data){
    const newCourse = await models.Courses.create(data)
    return newCourse;
  }

  async find(){
    const courses = await models.Courses.findAll();
    return courses;
  }

  async  findOne(id){

    const course = await models.Courses.findByPk(id);
    if(!course){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    // if(course.isBlock){
    //   throw boom.conflict('Lo sentimos, No tienes acceso a este curso')
    // }
    return course;
  }

  async update(id, change){
    const course = await this.findOne(id);
    const rta = await course.update(change);
    return rta;
  }

  async delete(id){
    const course = await this.findOne(id);
    await course.destroy();
    return { id } ;
  }

}

module.exports = AllCourses;
