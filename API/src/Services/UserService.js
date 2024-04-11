const { getUsers } = require("../Controllers/UserController");

const UserService = {
   getUsers:()=> {
    return new Promise((resolve, reject) => {
        server.get('/user', (req, res) =>{
            db.query('SELECT * FROM user', (err, result) =>{
                if (error) {
                    reject(`Erro ao buscar usuários: ${error.message}`);
                } else {
                    resolve(results);
                }
            })
        })
    })}
}

