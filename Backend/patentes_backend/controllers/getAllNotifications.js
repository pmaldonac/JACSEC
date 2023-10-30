const Visita = require("../models/visitaModel")
exports.getAllVisitas = async(req,res) =>{
    try{
        var all = await Visita.find({})
        res.status(200).json(all)
    }catch(e){
        console.error(e)
        res.status(400).json({"message":"Hubo un error al obtener las últimas visitas"})
    }
}