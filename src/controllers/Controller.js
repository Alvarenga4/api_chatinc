class Controller {
  constructor (Model) {
    this.Model = Model;
  }

  async index (req, res) {
    try {
      const models = await this.Model.findAll();
      return res.status(200).send(models);
    } catch (error) {
      return res
        .status(500)
        .send(
          error,
          'Ocorreu um problema ao tentar listar os dados'
        );
    }
  }

  async store (req, res) {
    try {
      const model = await this.Model.create(req.body);
      return res.status(200).send(model, 'Cadastro realizado com sucesso');
    } catch (error) {
      return res
        .status(500)
        .send(
          error,
          'Ocorreu um problema ao tentar criar um novo registro'
        );
    }
  }

  async update (req, res) {
    try {
      const { id } = req.params;
      const { body: data } = req;

      const exists = await this.Model.findByPk(id);

      if (!exists) {
        return res.status(404).send(null, 'Registro não encontrado');
      }

      await this.Model.update(id, data);

      return res.status(200).send(null, 'Atualizado com sucesso');
    } catch (error) {
      return res
        .status(500)
        .send(
          error,
          'Ocorreu um problema ao tentar atualizar o registro'
        );
    }
  }

  async delete (req, res) {
    try {
      const { id } = req.params;

      const exists = await this.Model.findByPk(id);

      if (!exists) {
        return res.status(404).send(null, 'Registro não encontrado');
      }

      const model = await this.Model.delete(id);

      return res.status(200).send(model, 'Apagado com sucesso');
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send(
          error,
          'Ocorreu um problema ao tentar apagar o registro'
        );
    }
  }
}

module.exports = Controller;
