
const Visita = require("../models/visitaModel")

exports.getLastVisitaController = async (req,res) =>{
    try{
        var lastVisita = await Visita.findOne({}).sort({hora_entrada: -1})
        const id = lastVisita.id
        lastVisita.published = true
        const newVisita = await Visita.findByIdAndUpdate(id, lastVisita)
        res.status(200).json(newVisita)
    }catch(e){
        console.error(e)
        res.status(400).json({"message":"Hubo un error al obtener la última notificación-"})
    }
}