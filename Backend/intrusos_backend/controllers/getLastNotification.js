const Notification = require("../models/notificationModel")

exports.getLastNotificationController = async (req,res) =>{
    try{
        var lastNotification = await Notification.findOne({}).sort({fecha: -1})
        res.status(200).json(lastNotification)
    }catch(e){
        console.error(e)
        res.status(400).json({"message":"Hubo un error al obtener la última notificación-"})
    }
}