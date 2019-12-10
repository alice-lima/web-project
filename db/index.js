const Sequelize = require("sequelize");

const Consulta = require("./models/Consulta");

const connection = new Sequelize("sinapseDB", "root", "password123", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false
  }
});

Consulta.init(connection);

module.exports = connection;
