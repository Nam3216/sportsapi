const mysql=require("mysql2/promise");
//import {DB_HOST,DB_NAME,DB_PASSWORD,DB_PORT,DB_USER} from "../config.js"
const configOk =require("../config")

/* esto era config original para q se conecte a base datos cdo es local
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
    port:configOk.DB_PORT,//poner si o si port aca, aunq en orig no taba, sino no se conecta a railway base dato
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})