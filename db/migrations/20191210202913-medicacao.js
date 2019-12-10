"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("medicacoes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      classeTerapeutica: {
        type: Sequelize.STRING,
        allowNull: true
      },
      apresentacao: {
        type: Sequelize.STRING,
        allowNull: true
      },
      viaAdministracao: {
        type: Sequelize.STRING,
        allowNull: true
      },
      unidade: {
        type: Sequelize.STRING,
        allowNull: true
      },
      posologia: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('medicacoes');
  }
};
