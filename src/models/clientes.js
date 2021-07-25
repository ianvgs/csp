const { INTEGER } = require("sequelize");
const Sequelize = require("sequelize");
const sequelize = require('../database/index') 
const telefones = require('../models/telefones')


const clientes = sequelize.define("clientes",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    primeiro_nome:{
        type: Sequelize.STRING,
        AllowNull:false,
    },    
    ultimo_nome:{
        type: Sequelize.STRING,
        AllowNull:false,
    },
    email: {
            type: Sequelize.STRING,
            allowNull:false,
    },
    telefone: {
        type: INTEGER,
        allowNull: false,
    },
});

/*clientes.hasMany(telefones);

clientes.sync().then((data)=>{
    console.log('Model clientes verificado.')
}).catch((data)=>{
    console.log('Erro na verificação do model clientes.')
})*/


module.exports = clientes;