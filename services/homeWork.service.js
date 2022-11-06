const studentHomeworkData = [{
  id: "1",
  studentMail: "lorena332@yahoo.com",
  chapter: "Alfabeto fonético vocales",
  video: "Mi tarea1 de video",
  audio: "Mi tarea1 de audio",
}];

const boom = require('@hapi/boom');

class StudentHomework{
  constructor(){
    this.homework = studentHomeworkData;
  }

  async create(data){
    const newHomework = {
      ...data,
    };
    this.homework.push(newHomework);
    return newHomework

  }

  async find(){
    return this.homework;
  }

  async  findOne(id){
    const index = this.homework.find(item => item.id === id);
    if(!index){
      throw boom.notFound('Lo sentimos, curso no encontrado');
    }
    return index;
  }

  async update(id, change){
    const index = this.homework.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('Lo sentimos, No tenemos tu evaluación');
    }else {
      const homeWorkModified = this.homework[index];
      this.homework[index] = {
        ...homeWorkModified,
        ...change
      }
    }
    return this.homework[index];
  }


  async delete(id){
    const index = this.homework.findIndex(item => item.id === id)
    if(index === -1){
      throw boom.notFound('Lo sentimos, No tenemos tu evaluación');
    }else{
      this.homework.splice(index, 1)
      return { id };
    }

  }

}


module.exports = StudentHomework;
