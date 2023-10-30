const Visita = require("../models/visitaModel")

exports.updateLastVisitaController = async(req,res) =>{
    try{
        const lastVisita = await Visita.findOne({}).sort({fecha: -1})
        if(!lastVisita){
            res.status(404).json({"message": "No se encontró la última notificación"})
        }
        else{
            id= lastVisita.id
            lastVisita.n_casa = req.body.n_casa
            lastVisita.rut_conductor = req.body.rut_conductor
            const newVisita = await Visita.findByIdAndUpdate(id, lastVisita)
            res.status(200).json(newVisita)
        }
    }catch(e){
        console.error(e)
        res.status(400).json({"message":"Hubo un error al obtener la última notificación-"})
    }
}

