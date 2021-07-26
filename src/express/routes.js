const Pessoas = require('../controllers/clientes')


module.exports = app => {  
  //Deleta informando id.
  app.delete('/clientes/', async (req, res) => {
    Pessoas.delete(req,res)
  }) 

  //Atualiza cadastro, id obrigatório.
  app.patch('/clientes/', async (req, res) => {
    Pessoas.atualiza(req, res)
  })

  //Lista todos os clientes. Obrigatório: enviar Bearer token authorization:'csp', no header authorization(bearer token)
  app.get('/todosclientes/',aut, async (req,res)=>{
    Pessoas.listarTodos(req,res)
  })

  //Lista cliente a partir do primeiro nome ou email.
  app.get('/clientes/',async (req, res)=>{
    Pessoas.listarUm(req,res)
  })

  //Cadastra o cliente
  app.post('/clientes/',  async (req, res) => { 
    Pessoas.cadastrar(req,res)
  })

  app.get('/', (req,res) =>
  {return res.status(200)})

}


//Middleware para checar autorização da rota '/listartodos/'
const aut = function (req, res, next) {  
  const autorizacao = req.headers.authorization;
  if (!autorizacao) {
    res.status(401).json({ message: "Requisição não autorizada." })
    return
  }
  const [ ,auth] = autorizacao.split('Bearer ');
  console.log(auth)  
  if(auth === "csp"){
  return next();
  }         
   
  return res.status(401).json({ message: "Autorização invalida." })
  
}

















const authy = function (req, res, next) {   

    const authToken = req.headers.authorization;

    if (!authToken) {
            res.status(401).json({ msg: "Erro no token" })
    }
    const [ ,token] = authToken.split('Bearer ');
    console.log(token)
    try {
            jwt.verify(token, "senha");
            return next();
    } catch (err) {
            return res.status(401).json({ msg: "token invalido" })
    }
}