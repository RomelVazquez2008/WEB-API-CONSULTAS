const dbService = require('../config/db.js');

const getAllUsers =  () => {

    sql = 'SELECT * FROM usuario'
    
    return dbService.querypromise(sql)

}

const getUser =  (id) => {

    sql = `SELECT * 
            FROM usuario
            WHERE IdUsuario = ${id}`
    
    return dbService.querypromise(sql)

}

const addUser =  (body) => {

    const {IdUsuario, Nombre, Apellido, Foto} = body

    sql = ` INSERT INTO usuario(IdUsuario, Nombre, Apellido, Foto) 
            VALUES(${IdUsuario}, '${Nombre}', '${Apellido}', '${Foto}')`
    
    return dbService.querypromise(sql)

}

const updateUser =  (id, body) => {

    const {Nombre, Apellido, Foto} = body

    sql = ` UPDATE usuario
                SET Nombre =  '${Nombre}',
                    Apellido = '${Apellido}',
                    Foto = '${Foto}'
            WHERE IdUsuario = ${id}
            `
    
    return dbService.querypromise(sql)

}

const deleteUser =  (id) => {

    sql = `DELETE FROM usuario
            WHERE IdUsuario = ${id}
            `
    
    return dbService.querypromise(sql)

}


module.exports = {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
}