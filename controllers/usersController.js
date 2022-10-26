const usersModel=require("../models/usersModels")

module.exports={

    getAll:async function(req,res,next){

        let users=await usersModel.getAll()//que devuelva toda la lista, llamo metodo getAll del modelo
        res.json(users)
       /* try{
            res.send("oki")

        }catch(error){
            console.log(error)
        }*/
    },
    createUser:async function(req,res,next){
        let name=req.body.username
        let password=req.body.password
        let users=await usersModel.createUser(req.body)//tb  lo puedo pasar todo el req.body y despues lo accedo en la funcion q paso
        res.json(users)
       
    },
    login:async function(req,res,next){
        
        let users=await usersModel.login(req.body)//tb  lo puedo pasar todo el req.body y despues lo accedo en la funcion q paso
        res.json(users)
    }
}