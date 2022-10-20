const db=require("../bin/mysql")//import la conexion a mysql
//no se usa objeto ni schema como con mongoose, directo los query, con el metodo execute. si fuese un post, un create, no se usa execute se usa insert. ver video clase 1:15
//rows: son las filas, fields:las coulmnas...lo que serian los datos de la tabla son ROWS
module.exports={

    getAll:async function(){
        const[rows,fields]= await db.pool.execute("select * from init")//esto para que muestre toda tabla init
        console.log(fields, "fields")//como prueba para verqes
        return rows //retorna datos
    },
    getById:async function(id){
        const[rows,fields]= await db.pool.execute(`select * from init where id=${id}`)//esto para que muestre toda tabla init
        console.log(fields, "fields")//como prueba para verqes
        return rows //retorna datos
    },
    getByCategory:async function(category){
       try{
        const[rows,fields]= await db.pool.execute(`select * from init where title ="${category}" `)//cuando el elemento es un varchar en sql, ponerle aca "", sino error
        console.log(fields, "fields")//como prueba para verqes
        return rows //retorna datos
       }catch(error){
        console.log(error)
       }
        
    },
    create:async function(category){
        try{
         const[rows,fields]= await db.pool.execute(`select * from init where title ="${category}" `)//cuando el elemento es un varchar en sql, ponerle aca "", sino error
         console.log(fields, "fields")//como prueba para verqes
         return rows //retorna datos
        }catch(error){
         console.log(error)
        }
         
     },

}