const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class EvaluationStudent{
  constructor(){}

  async create(data){
    const newEvaluation = await models.EvaluationStudent.create(data);
    return newEvaluation;
  }

  async find(){
    const allEvaluations = await models.EvaluationStudent.findAll({
      include: ['student'],
    });
    return allEvaluations;
  }

  async findOne(id){
    const evaluation = await models.EvaluationStudent.findByPk(id);
    if(!evaluation){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return evaluation;
  }

  async update(id, change){
    const evaluation = await this.findOne(id);
    const rta = await evaluation.update(change);
    return rta;
  }

  async delete(id){
    const evaluation = await this.findOne(id);
    await evaluation.destroy();
    return { id };
  }
}

module.exports = EvaluationStudent;
