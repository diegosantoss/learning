class CursoService {
  constructor(CursoModel) {
    this.curso = CursoModel;
  }

  async get() {
    const cursos = await this.curso.findAll();
    return cursos;
  }

  async adicionar(cursoDTO) {
    const curso = await this.curso.findOne({
      where: {
        nome: cursoDTO.nome
      }
    });

    if(curso != null){
      throw new Error('já existe um curso cadastrado com esse nome!')
    }

    try {
      await this.curso.create(cursoDTO);
    } catch (err) {
      throw err
    }
  }
}

module.exports = CursoService