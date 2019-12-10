"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("receitas", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      dosagem: {
        type: Sequelize.REAL,
        allowNull: false
      },
      frequencia: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      receita: {
        type: Sequelize.STRING,
        allowNull: false
      },
      prescricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      duracao: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      continuo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('receitas');
  }
};
