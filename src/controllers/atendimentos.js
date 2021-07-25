const Clientes = require('../models/clientes');
const sequelize = require('../database/index');



module.exports = app => {  

    //Faz a listagem de todos clientes da model clientes.
    app.get('/clientess/',async (req, res)=>{        
        const users = await Clientes.findAll();
        res.json({users, message:"Listando todo a tabela clientes."})
    })

    //Lista cliente a partir do primeiro nome ou email.
    app.get('/clientes/',async (req, res)=>{    

        console.log(req.body)
        const primeiro_nome = req.body.primeiro_nome;
        const email = req.body.email;  
        if(!req.body.email && !req.body.primeiro_nome){
            res.json({message:"É necessário informar primeiro_nome ou email para realizar a busca."})
        }  else if (req.body.email&&req.body.primeiro_nome){
            res.json({message:"Envie somente um campo: primeiro_nome ou email."})
        }  
        
        if(email){
            const find = await Clientes.findAll({
                where: {
                  email:email
                }
              });
            res.json({find})
        } 

        if(primeiro_nome){
            const find = await Clientes.findAll({
                where: {
                  primeiro_nome:primeiro_nome
                }
              });
            res.json({find})
        }

        
    })

    //Cadastra o cliente
    app.post('/clientes/',  async (req, res) => { 

        console.log(req.body)

        
        


        if(!req.body.primeiro_nome || !req.body.ultimo_nome ||!req.body.email ||!req.body.telefone){
            res.json({message:"Faltou algum dado para a inserção correta no banco de dados, envie novamente primeiro_nome, ultimo_nome, telefone e email"})
        }

        const primeiro_nome = req.body.primeiro_nome;
        const telefone = req.body.telefone;
        const email = req.body.email; 
        const ultimo_nome = req.body.ultimo_nome;

        const user = await Clientes.create({
            ultimo_nome: ultimo_nome,
            primeiro_nome: primeiro_nome,
            telefone: telefone,
            email:email,
            createdAt:'',
            updatedAt:''
          })                   
          res.json({user})
    })

    //Atualiza cadastro.
    app.patch('/clientes/', async (req, res) => {     
        
        if(!req.body.id || !req.body.primeiro_nome || !req.body.email ||!req.body.ultimo_nome||!req.body.telefone){
            res.json({message:"Falou alguma informação em sua requisição, favor informar todos os dados do cadastro novamente para atualização: id, primeiro_nome,ultimo_nome,telefone e email."})
        }
        const id = req.body.id;    
        const nome = req.body.nome;  
        const telefone = req.body.telefone;  
        const email = req.body.email;  
        const valores = {nome, telefone, email}
                 
        console.log(valores)     

        const update = await Clientes.update(valores,{
            where: {
             id: id
        }});
        res.json({update});
    })

    //Deleta row através de id.
    app.delete('/clientes/', async (req, res) => {

        if(!req.body.id){
            res.json({message:"Só é possível deletar o usuario informando seu numero de id."})
        }
        
       const id = req.body.id;
        await Clientes.destroy({
            where: {
            id: id
            }
        }); 
        res.json({id})    
    }) 

    
}

