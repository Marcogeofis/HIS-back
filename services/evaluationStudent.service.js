const evaluationStudent = [{
  id: "1",
  degree: "Básico",
  studentMail:	"armando@hotmail.com",
  Listening: 8,
  Speaking: 7,
  Reading: 9,
  Writing: 6,
  Participacion: 1,
  Homeworks: 1,
  Status: "Contento, Triste, Enojado, Frustrado, Disperso",
}]

const boom = require('@hapi/boom');

class EvaluationStudent{
  constructor(){
    this.evaluation = evaluationStudent;
  }

  async create(data){
    const newEvaluation = {
      ...data
    };
    this.evaluation.push(newEvaluation);
    return newEvaluation;
  }

  async find(){
    return this.evaluation;
  }

  async findOne(id){
    const index = this.evaluation.find(item => item.id_alumno === id);
    if(!index){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return index;
  }

  async update(id, change){
    const index = this.evaluation.findIndex(item => item.id_alumno === id);
    if(index === -1){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }else {
      const teacherModified = this.evaluation[index];
      this.evaluation[index] = {
        ...teacherModified,
        ...change
      }
    }
    return this.evaluation[index];
  }

  async delete(id){
    const index = this.evaluation.findIndex(item => item.id_alumno === id)
    if(index === -1){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }else{
      this.evaluation.splice(index, 1)
      return { id };
    }

  }

}

module.exports = EvaluationStudent;
