const Consulta = require("../db/models/Consulta");

module.exports = {
  async store(req, res) {
    try {
      const { data, hora, observacoes } = req.body;

      console.log("Consulta =>", req.body);

      const consulta = await Consulta.create({
        data,
        hora,
        observacoes
      });

      return res.json(consulta);
    } catch (error) {
      console.log(error);
    }
  }
};
