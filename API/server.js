const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const server = express()

server.use(express.urlencoded({extended: true}))
server.use(cors())
server.use(bodyParser.json())
                
const PORT = 7000

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

db.connect((err)  =>{
    if (err) return console.log(err);
    console.log('Conectado com sucesso!')
})

server .get('/', (req, res) =>{
res.send(`
<h1>API do sistema HUB DE COMENTÁRIOS</h1>
<ul><a href="http://localhost:7000/comment">Get de Comentários</ul>
<ul><a href="http://localhost:7000/user-comments">Get de Comentários do Usuário Específico</ul>
<ul><a href="http://localhost:7000/user">Get de Usuários</ul>
`)    
})

const userRouter = require('./src/Routes/UserRoute')

server.listen(PORT, () =>{
    console.log(`O server está rodando em http//localhost:${PORT}`)
})
server.use('/user', userRouter)