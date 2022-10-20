const db=require("../bin/mysql")//import la conexion a mysql
//no se usa objeto ni schema como con mongoose, directo los query, con el metodo execute. si fuese un post, un create, no se usa execute se usa insert. ver video clase 1:15
//rows: son las filas, fields:las coulmnas...lo que serian los datos de la tabla son ROWS
module.exports={

    getAll:async function(){
        const[rows,fields]= await db.pool.execute("select * from users")//esto para que muestre toda tabla init
        console.log(fields, "fields")//como prueba para verqes
        return rows //retorna datos
    },
    createUser:async function(data){//para create, ej, insertar usuarios en tabla users es asi
        console.log(data.password, "bodyyyname")
        let check=false
    //crear usuario, primer le digo q traiga todo lo de la tabla y q se fije si ya esta ese user, si esta poner check true y no inserta nuevo usuario    
        const[rows,fields]= await db.pool.execute("select * from users")
        for (const item of rows){
            if(item.username==data.username){
                check=true
               
            }       

            }
            //si no esta check queda en false e inserta nuevo usuario
        if(check==false){
             //metodo query, recibe 2 parametros. el primero es el query sql, es distinto a como se haria en sql, insert into tabla set poner primer campo = ?, segundo campo=?
                //segundo parametro recibe array, con la info a completar
                //el ? se va a susplantar por el primer valor que paso despues de la coma, el segundo ? por el segundo valor y asi
                await db.pool.query(`INSERT INTO users SET username = ?, password = ?`,[data.username,data.password])
        }else{
            return ("user already exists")
        }            
              
   },
   login:async function(data){

    const[rows,fields]= await db.pool.execute(`select * from users where username="${data.username}"`)//esto para que muestre toda tabla init
    //en rows agarro el usuario que da coincidencia
    //si rows lenght es 0 no hubo ninguna coincidencia, error en user
    if(rows.length==0){
        return("error en user")
    }else{
        for (const item of rows){//aca abajo busca coincidencia en pasword e rows y password que vino por body
            if(item.password==data.password){
                return rows //retorna datos
            }else{
                return("error en password")
            }
    }
   


        
    }
    console.log(fields, "fields")//como prueba para verqes
    
},

}