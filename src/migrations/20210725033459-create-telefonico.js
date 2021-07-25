'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('telefonicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      telefone_um: {
        type: Sequelize.INTEGER
      },
      telefone_dois: {
        type: Sequelize.INTEGER
      },
      telefone_tres: {
        type: Sequelize.INTEGER
      },
      pessoa_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {model:'Pessoas', key:'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('telefonicos');
  }
};