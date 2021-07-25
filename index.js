const customExpress = require('./src/express');
const sequelize = require('./src/database/index');


async function myFunction(){
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados: ok.');    
    //sequelize.sync();    
    const app = customExpress();
    app.listen(3000, console.log({message:'servidor rodando'}));
    console.log('Servidor rodando na porta 3000')
}
myFunction();

