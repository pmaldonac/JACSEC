const Notification = require("../models/notificationModel")

exports.getAllNotificationsController = async (req,res) =>{
    try{
        const currentDate = new Date();
        const startDate = new Date(currentDate);
        startDate.setHours(0, 0, 0, 0); 
        const endDate = new Date(currentDate);
        endDate.setHours(23, 59, 59, 999); 

        const notifications = await Notification.find({
            date: {
                $gte: startDate,
                $lte: endDate
            }
        });

        if (notifications.length === 0) {
            // Si no hay notificaciones, devuelve un arreglo vacío
            res.status(200).json([]);
        } else {
            // Si hay notificaciones, devuelve los datos
            res.status(200).json(notifications);
        }
    }catch(e){
        console.error(e)
        res.status(400).json({"message":"Hubo un error al obtener las últimas notificaciones"})
    }
}