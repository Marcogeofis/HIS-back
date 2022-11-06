const teacher = [{
  id:"1",
  nombre: "Marco Antonio",
  apellidoPaterno: "Rivera",
  apellidoMaterno:  "Cortés",
  email: "marco@gmail.com",
  password: "fsdfasdf324a",
}]

const boom = require('@hapi/boom');

class Teacher{
  constructor(){
    this.teacher = teacher;
  }

  async create(data){
    const newTeacher = {
      ...data
    };
    this.teacher.push(newTeacher);
    return newTeacher;
  }

  async find(){
    return this.teacher;
  }

  async findOne(id){
    const index = this.teacher.find(item => item.id === id);
    if(!index){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return index;

  }

  async update(id, change){
    const index = this.teacher.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }else {
      const teacherModified = this.teacher[index];
      this.teacher[index] = {
        ...teacherModified,
        ...change
      }
    }
    return this.teacher[index];
  }

  async delete(id){
    const index = this.teacher.findIndex(item => item.id === id)
    if(index === -1){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }else{
      this.teacher.splice(index, 1)
      return { id };
    }

  }
}

module.exports = Teacher;
