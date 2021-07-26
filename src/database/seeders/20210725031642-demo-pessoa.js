'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('clientes', [{
       primeiroNome: 'John Doe',
       ultimoNome:'Jão',
       email:'Jhon@gmail.com',
       createdAt: new Date(),
       updatedAt:new Date(),
     },{
      primeiroNome: 'Maria José',
       ultimoNome:'Alcantara',
       email:'Maria@gmail.com',
       createdAt: new Date(),
       updatedAt:new Date(),
    },{
      primeiroNome: 'Samara Del Chamado',
       ultimoNome:'Silva',
       email:'Samy@gmail.com',
       createdAt: new Date(),
       updatedAt:new Date(),
    },
    {
      primeiroNome: 'Clayton Alves',
       ultimoNome:'de Abreu',
       email:'Cl8iton@gmail.com',
       createdAt: new Date(),
       updatedAt:new Date(),
    },
    
    
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Pessoas', null, {});
     
  }
};
