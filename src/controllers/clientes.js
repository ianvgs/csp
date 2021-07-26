const Clientesd = require('../database/models/clientes')
const Telefones = require('../database/models/telefones');



class Pessoas {         

    async atualiza(req, res) {   
        
        if(!req.body.id){ return res.json({message:"É obrigatório a indicação do ID do usuario que será alterado, além dos dados que deseja alterar."})}

        const id = req.body.id;         
        const {primeiroNome,ultimoNome,email,telefone0,telefone1,telefone2,telefone3,telefone4,telefone5,telefone6,telefone7,telefone8,telefone9,telefone10} = req.body;  

        
        const updateC = await Clientesd.update(
            {primeiroNome:primeiroNome,ultimoNome:ultimoNome,email:email},  
            {
            where: {
             id: id
        }});
        const updateT = await Telefones.update(
            {telefone0:telefone0,telefone1:telefone1,telefone2:telefone2,telefone3:telefone3,telefone4:telefone4,telefone5:telefone5,telefone6:telefone6,telefone7:telefone7,telefone8:telefone8,telefone9:telefone9,telefone10:telefone10},  
            {
            where: {
             userId: id
        }});
        return res.json({updateC,updateT});        
    } 

    async delete(req, res) {

        if(!req.body.id){
        return res.status(200).json({message:"Só é possível deletar o usuario informando seu numero de id"})}    
             
        const id = req.body.id  
        await Clientesd.destroy({
            where: {
            id: id
            }
        }) 
        return res.json({message:"Os seguintes clientes foram deletados:",id}) 
    }

    async listarTodos(req,res){                
        const users = await Clientesd.findAll({
            include:{ association:'telefones'}
        });
        return res.json({users, message:"Listando todo a tabela clientes."})
    }

    async listarUm(req, res){  
        
        const primeiroNome = req.body.primeiroNome;
        const email = req.body.email; 

        if(!req.body.email&&!req.body.primeiroNome){
           return res.json({message:"É necessário informar primeiroNome ou email para realizar a busca."})
        }  

        if(req.body.email && req.body.primeiroNome){  
            const client = await Clientesd.findAll({                
                where: {
                  primeiroNome:primeiroNome
                },
                include:{association:'telefones'}
            })                      
            return res.json({client})            
        }
        
        if(email){
            const client = await Clientesd.findAll({                
                where: {
                  email:email
                },
                include:{association:'telefones'}
            })            
            return res.json({client})            
        } 

        if(primeiroNome){
            const client = await Clientesd.findAll({                
                where: {
                  primeiroNome:primeiroNome
                },
                include:{association:'telefones'}
            })                     
            res.json({client})
            return
        }
    }   

    async cadastrar(req,res){       
      

      if(!req.body.primeiroNome || !req.body.ultimoNome ||!req.body.email ||!req.body.telefone0){
          res.json({message:"Faltou algum dado para a inserção correta no banco de dados, envie novamente primeiroNome, ultimoNome, telefone0 e email"})
          return
      }

      const {primeiroNome,ultimoNome,email,telefone0,telefone1,telefone2,telefone3,telefone4,telefone5,telefone6,telefone7,telefone8,telefone9,telefone10} = req.body;      

      const user = await Clientesd.create({
          ultimoNome: ultimoNome,
          primeiroNome: primeiroNome,          
          email:email,
          createdAt:'',
          updatedAt:''
        })

        const tel = await Telefones.create({
            userId:user.dataValues.id,
            telefone0:telefone0,
            telefone1:telefone1,
            telefone2:telefone2,
            telefone3:telefone3,
            telefone4:telefone4,
            telefone5:telefone5,
            telefone6:telefone6,
            telefone6:telefone7,
            telefone6:telefone8,
            telefone6:telefone9,
            telefone6:telefone10 
        })                           
           
        return res.json({message:'Cliente Cadastrado com sucesso',user,tel})
        
    }














   

}


module.exports = new Pessoas;