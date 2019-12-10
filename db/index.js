const Sequelize = require("sequelize");
// const dbConfig = require("../config/database");

const Consulta = require("./models/Consulta");

const connection = new Sequelize("sinapseDB", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

Consulta.init(connection);

module.exports = connection;
