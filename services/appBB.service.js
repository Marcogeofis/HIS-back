const appBB = [{
  id: "1",
  tegusto: "si",
  queGustoMas: "las clases",
  queNoGusto: "más imagenes",
  suggestions: "La clase es muy divertida muy amena, el profesor es muy dinámico",
  meRecomiendas: "si",
}]

class AppBBProgress{
  constructor(){
    this.app = appBB;
  }

  async create(data){
    const newAppBB = {
      ...data
    };
    this.app.push(newAppBB);
    return newAppBB;
  }

  async find(){
    return this.app;
  }

  async findOne(id){
    const index = this.app.find(item => item.id === id);
    if(!index){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }
    return index;

  }

  async update(id, change){
    const index = this.app.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }else {
      const appBBModified = this.app[index];
      this.app[index] = {
        ...appBBModified,
        ...change
      }
    }
    return this.app[index];
  }

  async delete(id){
    const index = this.app.findIndex(item => item.id ===id);
    if (index === -1){
      throw boom.notFound('Lo sentimos, No encontramos resultados');
    }else{
      this.app.splice(index, 1);
      return {id};
    }
  }

}
module.exports = AppBBProgress;
