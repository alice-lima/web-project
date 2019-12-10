"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("medicos", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      usuario: {
        type: Sequelize.STRING,
        allowNull: true
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: true
      },
      dataNasc: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: true
      },
      crm: {
        type: Sequelize.STRING,
        allowNull: true
      },
      uf: {
        type: Sequelize.STRING,
        allowNull: true
      },
      especialidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telResidencia: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telCelular: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telOutro: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('medicos');
  }
};
