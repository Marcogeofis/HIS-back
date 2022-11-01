const courses = [{
  id: "1",
  nivel: "Básico",
  costo: 1200
},
{
  id: "2",
  nivel: "Intermedio",
  costo: 1800
},
{
  id: "3",
  nivel: "Avanzado",
  costo: 2500
}];


// mi objeto CoursesService
class CoursesService{
  constructor(){
    this.courses = courses;
  }

  async create(data){
    const newCourse = {
      ...data
    };
    this.courses.push(newCourse);
    return newCourse;
  }

  async find(){
    return this.courses;
  }

  async  findOne(id){
    const index = this.courses.find(item => item.id === id);
    if(index === -1){
      throw new Error('Curso no encontrado')
    }
    return index;
  }

  async update(id, change){
    const index = this.courses.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('Curso no encontrado');
    }else {
      const course = this.courses[index];
      this.courses[index] = {
        ...course,
        ...change
      }
    }
    return this.courses[index];
  }

  async delete(id){
    const index = this.courses.findIndex(item => item.id ===id);
    if (index === -1){
      throw new Error('Curso no encontrado');
    }else{
      this.courses.splice(index, 1);
      return {id};
    }
  }

}

module.exports = CoursesService;
