const Notification = require("../models/notificationModel")

exports.updateLastNotificationController = async (req,res) =>{
    try{
        const lastNotification = await Notification.findOne({}).sort({fecha: -1})
        if(!lastNotification){
            res.status(404).json({"message": "No se encontró la última notificación."})
        }else{
            id = lastNotification.id
            lastNotification.descripcion = req.body.descripcion
            lastNotification.gravedad = req.body.gravedad
            const newNotification = await Notification.findByIdAndUpdate(id,lastNotification )
            res.status(200).json(lastNotification)
        }
        
    }catch(e){
        console.error(e)
        res.status(400).json({"message":"Hubo un error al obtener la última notificación-"})
    }
}