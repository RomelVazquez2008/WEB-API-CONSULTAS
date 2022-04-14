const mysql = require('mysql');


const pool = mysql.createPool({
    connectionLimit: 10,  
    host: 'localhost', 
    user: 'root', 
    password: 'admin',
    database: 'test'
  
}); 

pool.getConnection((err,connection)=> {
    if(err)
    throw err;
    console.log('Base de Datos Conectada Exitosamente');
    connection.release();
  });


  //ojo aqui
const querypromise = (sql) => {
    return new Promise( (resolve, reject) => {
        pool.query(sql, (error, elements) =>{
            if (error){
                return reject(error)
            }
            return resolve(elements)
        })
    })
}

module.exports = {
    pool,
    querypromise
}


