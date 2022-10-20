const initModel=require("../models/initModels")

module.exports={

    getAll:async function(req,res,next){

        let init=await initModel.getAll()//que devuelva toda la lista, llamo metodo getAll del modelo
        res.json(init)
       /* try{
            res.send("oki")

        }catch(error){
            console.log(error)
        }*/
    },
    getById:async function(req,res,next){
        let id=req.params.id
       try{
            let init=await initModel.getById(id)//que devuelva toda la lista, llamo metodo getAll del modelo
            res.json(init)
        }catch(error){
            console.log(error)
        }
        
       
    },
    getByCategory:async function(req,res,next){
        let category=req.params.category
       try{
            let init=await initModel.getByCategory(category)//que devuelva toda la lista, llamo metodo getAll del modelo
            res.json(init)
        }catch(error){
            console.log(error)
        }
        
       
    }
}