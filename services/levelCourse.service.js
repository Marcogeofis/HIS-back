const levelcourse = [{
  id:"1",
  level: "Básico",
  topic: "Alfabeto Fonético",
  video: "Introduccion al curso",
  audios: "Ninguno",
  imagenes: "imagen1.jpg",
  vocabulario: "word12"
}]

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
    if(index === -1){
      throw new Error('NO se encontro usuario');
    }else {
      return index;
    }
  }

  async update(id, change){
    const index = this.course.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('NO se encontro usuario');
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
      throw new Error('Curso no encontrado');
    }else{
      this.course.splice(index, 1);
      return {id};
    }
  }
}

module.exports = LevelCourse;
