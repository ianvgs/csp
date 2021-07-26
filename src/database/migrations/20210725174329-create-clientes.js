'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('clientes', { 

      id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        allowNull: false,
        autoIncrement: true        
      },
      primeiroNome:{
        type: Sequelize.STRING,
        allowNull: false
      },
      ultimoNome:{
        type: Sequelize.STRING,
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull:false
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull:false
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull:false
      },
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('clientes');
    
  }
};
