/* Cambiamos a pool por sequelize por que pool ya corre por detras de sequelize */
const { models } = require('../libs/sequelize');

// const pool = require('../libs/postgres.pool');

const boom = require('@hapi/boom');
// const getConnection = require('../libs/postgres');


class UserStudent{
  constructor(){
    // this.user = student;
    // this.pool = pool;
    // this.pool.on('error', (err)=> console.error(err));
  }

  async create(data){
    const newStudent = await models.Student.create(data);
    return newStudent;

    // const newUser = {
    //   ...data
    // };
    // this.user.push(newUser);
    // return newUser;
  }

  async find(){
    /*sin pool */
    // const client = await getConnection();
    // const rta = await client.query('SELECT * FROM student');
    // return rta.rows;

    /*Con pool */
    // const query = 'SELECT * FROM student';
    // const rta = await this.pool.query(query);
    // return rta;

    /*con Sequelize */
    // const query = 'SELECT * FROM student';
    // const [data] = await sequelize.query(query);
    const students = await models.Student.findAll();
    return students;
  }

  async findOne(id){
    const student = await models.Student.findByPk(id);
    if(!student){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return student;
    // const index = this.user.find(item => item.id === id);
    // if(!index){
    //   throw boom.notFound('Lo sentimos, No encontramos resultados');
    // }
    // return index;

  }

  async update(id, changes){
    const student = await this.findOne(id);
    const rta = await student.update(changes)
    return rta;
    // const index = this.user.findIndex(item => item.id === id);
    // if(index === -1){
    //   throw boom.notFound('Lo sentimos, No encontramos resultados');
    // }else {
    //   const usermodified = this.user[index];
    //   this.user[index] = {
    //     ...usermodified,
    //     ...change
    //   }
    // }
    // return this.user[index];
  }

  async delete(id){
    const student = await this.findOne(id);
    await student.destroy();
    return { id };

    // const index = this.user.findIndex(item => item.id ===id);
    // if (index === -1){
    //   throw boom.notFound('Lo sentimos, No encontramos resultados');
    // }else{
    //   this.user.splice(index, 1);
    //   return {id};
    // }
  }
}

module.exports = UserStudent;
