const pool = require('../config/db.js');

const getAllUsers =  () => {

    sql = 'SELECT * FROM kpis'
    
    return new Promise((resolve, reject)=>{
        pool.query(sql,  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });

}

module.exports = {
    getAllUsers
}