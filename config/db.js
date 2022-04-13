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

module.exports = pool;


