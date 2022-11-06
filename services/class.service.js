const classOfCourse = [{
  id: "1",
  id_period:"sept a oct del 2022",
  degree: "Basic",
  gradeSection: "Basic A",
  teacherMail: "rhcplb85@hotmail.com",
  studentMail: "lorena332@yahoo.com",
  classBegins: "08:00:00",
  classEnds: "09:00:00",
}]

const boom = require('@hapi/boom');

class ClassOfCourse{
  constructor(){
    this.classCourse = classOfCourse;
  }

  async create(data){
    const newClass = {
      ...data
    };
    this.classCourse.push(newClass);
    return newClass;
  }

  async find(){
    return this.classCourse;
  }

  async findOne(id){
    const index = this.classCourse.find(item => item.id === id);
    if(!index){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return index;

  }

  async update(id, change){
    const index = this.classCourse.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }else {
      const ClassModified = this.classCourse[index];
      this.classCourse[index] = {
        ...ClassModified,
        ...change
      }
    }
    return this.classCourse[index];
  }

  async delete(id){
    const index = this.classCourse.findIndex(item => item.id ===id);
    if (index === -1){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }else{
      this.classCourse.splice(index, 1);
      return {id};
    }
  }
}

module.exports = ClassOfCourse;
