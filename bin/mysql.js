const mysql=require("mysql2/promise");


module.exports.pool=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"stcollins01",
    database:"sports",
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})