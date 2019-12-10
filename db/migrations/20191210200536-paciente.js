"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("pacientes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dataNasc: {
        type: Sequelize.STRING,
        allowNull: false
      },
      natCidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      natEstado: {
        type: Sequelize.STRING,
        allowNull: false
      },
      natPais: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false
      },
      logradouro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: false
      },
      complemento: {
        type: Sequelize.STRING,
        allowNull: true
      },
      telResidencial: {
        type: Sequelize.STRING,
        allowNull: true
      },
      telComercial: {
        type: Sequelize.STRING,
        allowNull: true
      },
      telOutro: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("pacientes");
  }
};
