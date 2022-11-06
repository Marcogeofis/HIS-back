const levelcourse = [{
  id:"1",
  degree: "Basic",
  gradeSection: "Basic A",
  nameChapter: "Alfabeto Fonético vocales",
  video: "Introduccion al curso",
  audio: "Ninguno",
  image: "imagen1.jpg",
  vocabulary: "word12"
}]

const boom = require('@hapi/boom');

class LevelCourse{
  constructor(){
    this.course = levelcourse;
  }

  async create(data){
    const newCourse = {
      ...data
    };
    this.course.push(newCourse);
    return newCourse;
  }

  async find(){
    return this.course;
  }

  async findOne(id){
    const index = this.course.find(item => item.id === id);
    if(!index){
      throw boom.notFound('Lo sentimos, No tenemos ese curso');
    }
    return index;

  }

  async update(id, change){
    const index = this.course.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('Lo sentimos, No tenemos ese curso');
    }else {
      const courseModified = this.course[index];
      this.course[index] = {
        ...courseModified,
        ...change
      }
    }
    return this.course[index];
  }

  async delete(id){
    const index = this.course.findIndex(item => item.id ===id);
    if (index === -1){
      throw boom.notFound('Lo sentimos, No tenemos ese curso');
    }else{
      this.course.splice(index, 1);
      return {id};
    }
  }
}

module.exports = LevelCourse;
