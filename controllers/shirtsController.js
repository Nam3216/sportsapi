const shirtsModel=require("../models/shirtsModels")

module.exports={

    getAll:async function(req,res,next){

        let shirts=await shirtsModel.getAll()//que devuelva toda la lista, llamo metodo getAll del modelo
        res.json(shirts)
       
    },
    getById:async function(req,res,next){
        let id=req.params.id
        try{
            let shirts=await shirtsModel.getById(id)//que devuelva toda la lista, llamo metodo getAll del modelo
            res.json(shirts)
        }catch(error){
            console.log(error)
        }
        
      
    },
    getByCategory:async function(req,res,next){
        let category=req.params.category
        try{
            let shirts=await shirtsModel.getByCategory(category)//que devuelva toda la lista, llamo metodo getAll del modelo
            res.json(shirts)
        }catch(error){
            console.log(error)
        }
        
      
    },
    getByRelatedTo:async function(req,res,next){
        let related=req.params.related
        try{
            let shirts=await shirtsModel.getByRelatedTo(related)//que devuelva toda la lista, llamo metodo getAll del modelo
            res.json(shirts)
        }catch(error){
            console.log(error)
        }
        
      
    }
}