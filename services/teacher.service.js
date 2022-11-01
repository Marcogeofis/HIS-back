const teacher = [{
  id:"1",
  nombre: "Marco Antonio",
  apellidoPaterno: "Rivera",
  apellidoMaterno:  "Cortés",
  email: "marco@gmail.com",
  password: "fsdfasdf324a",
}]

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
    if(index === -1){
      throw new Error('NO se encontro usuario');
    }else {
      return index;
    }
  }

  async update(id, change){
    const index = this.teacher.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('NO se encontro usuario');
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
      throw new Error('No tenemos a ese Profesor ')
    }else{
      this.teacher.splice(index, 1)
      return { id };
    }

  }
}

module.exports = Teacher;
