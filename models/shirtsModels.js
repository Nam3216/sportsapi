const db=require("../bin/mysql")//import la conexion a mysql
//no se usa objeto ni schema como con mongoose, directo los query, con el metodo execute. si fuese un post, un create, no se usa execute se usa insert. ver video clase 1:15
//rows: son las filas, fields:las coulmnas...lo que serian los datos de la tabla son ROWS
module.exports={

    getAll:async function(){
        const[rows,fields]= await db.pool.execute("select * from shirts")//esto para que muestre toda tabla init
        console.log(fields, "fields")//como prueba para verqes
        return rows //retorna datos
    },
    getById:async function(id){
        const[rows,fields]= await db.pool.execute(`select * from shirts where id=${id}`)//esto para que muestre toda tabla init
        console.log(fields, "priceeee")//como prueba para verqes
        
        return rows //retorna datos
    },
    getByCategory:async function(category){
        const[rows,fields]= await db.pool.execute(`select * from shirts where category="${category}"`)//esto para que muestre toda tabla init
        console.log(fields, "fields")//como prueba para verqes
        return rows //retorna datos
    },
   getByRelatedTo:async function(related){
//aca junto las dos tablas, quiero que me traiga cosas de init (ewl title) y de shirt, siempre q pertenezca a un init que pasa usuario
//aca el front por url pasa una categoria de tabla init(running es 1). con esto quiero que traiga el title de init, la descripcion de shirt y el price siempre que haya coincidencia entre id y lo q paso usuario, osea q pertenezca a esa categoria related_to
    const[rows,fields]= await db.pool.execute(`select init.title, shirts.description, shirts.price from init left join shirts on init.id=${related}`)
    console.log(fields, "fields")//como prueba para verqes
    return rows //retorna datos
},
}