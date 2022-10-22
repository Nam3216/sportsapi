const mysql=require("mysql2/promise");
//import {DB_HOST,DB_NAME,DB_PASSWORD,DB_PORT,DB_USER} from "../config.js"
const configOk =require("../config")

/*
module.exports.pool=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"stcollins01",
    database:"sports",
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})

en vez de usar la forma normal lo pongoo asi, para q se pueda trabajar local o por cloud
*/

module.exports.pool=mysql.createPool({
    host:configOk.DB_HOST,
    user:configOk.DB_USER,
    password:configOk.DB_PASSWORD,
    database:configOk.DB_NAME,
    port:configOk.DB_PORT,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})