const scheduleClass = [{
  id:"1",
  teacherMail: "marco@yahoo.com",
  hrs: 8,
  start: '08:00:00',
  end: '09:00:00',
  period: '16 sept del 2022',
}]

const boom = require('@hapi/boom');

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
    if(!index){
      throw boom.notFound('Lo sentimos, No tenemos ese horario');
    }
    return index;

  }

  async update(id, change){
    const index = this.schedule.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('Lo sentimos, No tenemos ese horario');
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
      throw boom.notFound('Lo sentimos, No tenemos ese horario');
    }else{
      this.schedule.splice(index, 1);
      return {id};
    }
  }
}

module.exports = ScheduleBB;
