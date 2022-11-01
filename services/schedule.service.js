const scheduleClass = [{
  id:"1",
  level: "Básico",
  apartado: "Básico 1A",
  profesor: "Marco Antonio",
  horas: "1:00",
  empieza: "10:00 am",
  termina: "11:00 am",
}]

class ScheduleBB{
  constructor(){
    this.schedule = scheduleClass;
  }

  async create(data){
    const newSchedule = {
      ...data
    };
    this.schedule.push(newSchedule);
    return newSchedule;
  }

  async find(){
    return this.schedule;
  }

  async findOne(id){
    const index = this.schedule.find(item => item.id === id);
    if(index === -1){
      throw new Error('NO se encontro usuario');
    }else {
      return index;
    }
  }

  async update(id, change){
    const index = this.schedule.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('NO se encontro usuario');
    }else {
      const scheduleModified = this.schedule[index];
      this.schedule[index] = {
        ...scheduleModified,
        ...change
      }
    }
    return this.schedule[index];
  }

  async delete(id){
    const index = this.schedule.findIndex(item => item.id ===id);
    if (index === -1){
      throw new Error('Curso no encontrado');
    }else{
      this.schedule.splice(index, 1);
      return {id};
    }
  }
}

module.exports = ScheduleBB;
