const Sequelize =  require('sequelize');
const Clientes = require('./models/clientes')
const Telefones = require('./models/telefones')

const sequelize = new Sequelize('csp','root','',{
    dialect: 'mysql',
    host: 'localhost',
    port:3306,    
    define:{
        timeStamps:true
    },
  }); 

  Clientes.init(sequelize)
  Telefones.init(sequelize)

  Telefones.associate(sequelize.models)
  Clientes.associate(sequelize.models)



module.exports = sequelize;


