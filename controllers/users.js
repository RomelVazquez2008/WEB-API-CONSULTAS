const UsersService = require ('../services/users.js');

module.exports = {
    getAllUsers :  async (req, res, next) => {
        try{
            const users = await UsersService.getAllUsers();
            res.status(200).json({users})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`});
        }  
    },

    getUser :  async (req, res, next) => {
        try{
            const id = req.params.id
            const user = await UsersService.getUser(id);
            res.status(200).json({user})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`});
        }  
    },

    addUser :  async (req, res, next) => {
        try{
            const user = await UsersService.addUser(req.body);
            res.status(200).json({user})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`});
        }  
    },

    updateUser :  async (req, res, next) => {
        try{
            
            const id = req.params.id
            const user = await UsersService.updateUser(id, req.body);
            res.status(200).json({user})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`});
        }  
    },

    deleteUser :  async (req, res, next) => {
        try{
            const id = req.params.id
            const user = await UsersService.deleteUser(id);
            res.status(200).json({user})
        } catch(err) {
            res.status(500).json({"message": `Error al obtener los usuarios. Err: ${err}`});
        }  
    }

};
