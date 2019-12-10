const { Model, DataTypes } = require("sequelize");

class Consulta extends Model {
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

module.exports = Consulta;
