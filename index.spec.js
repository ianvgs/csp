const request = require('supertest');
const app = require('./src/express');

describe('Teste do servidor',() =>{

    it('Acessa a main route', async () =>{
        const res = await request(app).get('/')
        expect(res.body).toHaveProperty('message')
        return

    })
})

describe('Teste do banco de dados',() =>{
    
    it('Consulta se há dados vindo do banco de dados', async () => {
        
        const res = await request(app).get('/clientess/');
        console.log(res)
        expect(res.body.toHaveProperty([{primeiro_nome, ultimo_nome,telefone,email,createdAt,updatedAt,id}]))
        return
    })

    
})
