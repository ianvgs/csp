const { INTEGER } = require("sequelize");
const Sequelize = require("sequelize");
const sequelize = require('../database/index'); 
const clientes = require("./clientes");


const telefones = sequelize.define("telefones",{
    
    telefone_um: {
        type: INTEGER,
        allowNull: false,
    },    
    telefone_dois: {
        type: INTEGER,
        allowNull: false,
    },
    telefone_tres: {
        type: INTEGER,
        allowNull: false,
    },
    telefone_quatro: {
        type: INTEGER,
        allowNull: false,
    },
    /*user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'clientes', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
    },*/

});

/*

telefones.sync().then((data)=>{
    console.log('Model telefones verificado.')
}).catch((data)=>{
    console.log('Erro na verificação do model clientes')
})*/


module.exports = telefones;