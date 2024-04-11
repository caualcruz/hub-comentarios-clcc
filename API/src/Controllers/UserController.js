const UserService = require('../Services/UserService')

const UserController = {
    getUsers: (req, res) =>{
        UserService.getUsers().
        then(result =>{
            res.json({success: true, users: result});
        }).catch(err =>{
            res.status(500).json({success: false, error: `Erro interno do servidor: ${error}`});
        })
    }
}

module.exports = UserController;