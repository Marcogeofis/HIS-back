const evaluationStudent = [{
  id_alumno: "1",
  nivel: "Básico",
  name:	"Armando",
  Listening: 8,
  Speaking: 7,
  Reading: 9,
  Writing: 6,
  Participación: "1 pt",
  Homeworks: "1 pt",
  Status: "Contento, Triste, Enojado, Frustrado, Disperso",
}]

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
    if(index === -1){
      throw new Error('NO se encontro boleta');
    }else {
      return index;
    }
  }

  async update(id, change){
    const index = this.evaluation.findIndex(item => item.id_alumno === id);
    if(index === -1){
      throw new Error('NO se encontro boleta');
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
      throw new Error('No encontramos la boleta ')
    }else{
      this.evaluation.splice(index, 1)
      return { id };
    }

  }

}

module.exports = EvaluationStudent;
