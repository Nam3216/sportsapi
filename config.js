//aca hay q poner la info que pongo en mysql.js, en el archivo en donde me conceto a la base de datos
//hay q ponerlo en variables
module.exports={
 PORT:process.env.DB_PORT || 3006,//aca digo q el puerto por defecto es 3000, el servicio web tipo railway puede dar otro. process es propio de reailw, se fija si existe PORT, SI ESTA es q el servicio ya dejo un entorno para conectarse, sino es 3000 del localhost

//ahora comprobar para base de datos que me conecto desde mysql.js
//el proveedor de la nube me da un usuario, un  pass, un dominio, un  puertto especial, una base de datos (porq un proveedor de nuebe a veces solo te permite crear base de datos en esa pag) asiq lo tengo q poner aca

 // lee primero desde sistema variable db_host (no lo da nueb, lo pongo yo cdo haga deploy, si no esvciste usa local host q es lo q uso cdo trabajajo localmente)
 DB_HOST:process.env.DB_HOST ||"localhost", //si no existe es porq trabajo local, entonces uso lo q esta en mysql.js
 DB_USER :process.env.DB_USER ||"root",//si no existe es porq trabajo local, entonces uso lo q esta en mysql.js
 DB_PASSWORD :process.env.DB_PASSWORD ||"stcollins01",//si no existe es porq trabajo local, entonces uso lo q esta en mysql.js
 DB_NAME:process.env.DB_NAME||"sports",//si no existe es porq trabajo local, entonces uso lo q esta en mysql.js RAILQAY DA OTRO NOMBRE DE BASE DE DATOS
 DB_PORT :process.env.DB_PORT||"3306",//si no existe es porq trabajo local, entonces uso lo q esta en mysql.js esto podria no estar, no lo tengo en mysql

}


//en railway db_host necesita dire correcta de mysql, los otros =, osea necesita una base de datos de mysql, ya sea la local o la de rasilway