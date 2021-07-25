'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('Pessoas', [{
       primeiroNome: 'John Doe',
       createdAt: new Date(),
       updatedAt:new Date(),
     },{
      primeiroNome: 'Marco Antonho',
      createdAt: new Date(),
      updatedAt:new Date(),
    },{
      primeiroNome: 'Creudisneide',
      createdAt: new Date(),
      updatedAt:new Date(),
    },
    
    
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Pessoas', null, {});
     
  }
};
