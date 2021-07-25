const Sequelize =  require('sequelize');

const sequelize = new Sequelize('csp','root','',{
    dialect: 'mysql',
    host: 'localhost',
    port:3306,
    
    define:{
        timeStamps:true,
        underScored:true
    },
  }); 
module.exports = sequelize;