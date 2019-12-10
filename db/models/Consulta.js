const { Model, DataTypes } = require("sequelize");

class Consultas extends Model {
  static init(sequelize) {
    super.init(
      {
        data: DataTypes.STRING,
        hora: DataTypes.STRING,
        observacoes: DataTypes.STRING
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Consultas;
