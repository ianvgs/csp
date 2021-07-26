'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('telefones', { 

      id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        allowNull: false,
        autoIncrement: true        
      },
      userId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'clientes', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      telefone0:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      telefone1:{
        type: Sequelize.INTEGER       
      },
      telefone2:{
        type: Sequelize.INTEGER        
      },
      telefone3:{
        type: Sequelize.INTEGER,
      },
      telefone4:{
        type: Sequelize.INTEGER,
      },
      telefone5:{
        type: Sequelize.INTEGER,
      },
      telefone6:{
        type: Sequelize.INTEGER,
      },      
      createdAt:{
        type: Sequelize.DATE,
        allowNull:false
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull:false
      }
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('telefones');
    
  }
};
