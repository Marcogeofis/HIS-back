const teacherProgressData = [{
  id: "1",
  teacherMail: "rhcpb85@hotmail.com",
  actitud:"Good",
  comunication: "Good",
  patient: "Very good",
  suggestion:"que el profesor sea más dinámico",
}]

const boom = require('@hapi/boom');

class teacherProgress{
  constructor(){
    this.teacherProgress = teacherProgressData;
  }

  async create(data){
    const newProgressTeacher = {
      ...data
    };
    this.teacherProgress.push(newProgressTeacher);
    return newProgressTeacher;
  }

  async find(){
    return this.teacherProgress;
  }

  async findOne(id){
    const index = this.teacherProgress.find(item => item.id === id);
    if(!index){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return index;

  }

  async update(id, change){
    const index = this.teacherProgress.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }else {
      const teacherProgressmodified = this.teacherProgress[index];
      this.teacherProgress[index] = {
        ...teacherProgressmodified,
        ...change
      }
    }
    return this.teacherProgress[index];
  }

  async delete(id){
    const index = this.teacherProgress.findIndex(item => item.id ===id);
    if (index === -1){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }else{
      this.teacherProgress.splice(index, 1);
      return {id};
    }
  }
}

module.exports = teacherProgress;
