'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('telefones', [{

            telefone0:'11111112',
            userId:'1',
            telefone1:'11111113',
            telefone2:'11111114',
            createdAt: new Date(),
            updatedAt:new Date()},
            {
            telefone0:'00000000',
            userId:'2',
            telefone1:'11111111',
            telefone2:'22222222',
            createdAt: new Date(),
            updatedAt:new Date()},
            {
            telefone0:'00000000',
            userId:'3',
            telefone1:'11111111',
            telefone2:'22222222',
            createdAt: new Date(),
            updatedAt:new Date()},
            {
            telefone0:'00000000',
            userId:'4',
            telefone1:'11111111',
            telefone2:'22222222',
            createdAt: new Date(),
            updatedAt:new Date()
          },
     ], {});
    },




  down: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkDelete('telefones', null, {});
     
  }
};
