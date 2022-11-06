const student = [{
  id:"1",
  nombre: "Geronimo Alex",
  apellidoPaterno: "Perez",
  apellidoMaterno: "Lore",
  edad: 23,
  email: "geronimo@gmail.com",
  password: "fasdjkfa",
}]

const boom = require('@hapi/boom');

class UserStudent{
  constructor(){
    this.user = student;
  }

  async create(data){
    const newUser = {
      ...data
    };
    this.user.push(newUser);
    return newUser;
  }

  async find(){
    return this.user;
  }

  async findOne(id){
    const index = this.user.find(item => item.id === id);
    if(!index){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return index;

  }

  async update(id, change){
    const index = this.user.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }else {
      const usermodified = this.user[index];
      this.user[index] = {
        ...usermodified,
        ...change
      }
    }
    return this.user[index];
  }

  async delete(id){
    const index = this.user.findIndex(item => item.id ===id);
    if (index === -1){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }else{
      this.user.splice(index, 1);
      return {id};
    }
  }
}

module.exports = UserStudent;
