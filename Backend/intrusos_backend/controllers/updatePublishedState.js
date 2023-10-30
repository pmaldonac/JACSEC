const Notification = require("../models/notificationModel")

exports.updatePublishedStateController = async (req,res) =>{
    try{
        const id_event = req.body.id_event
        if (id_event) {
            var publishedState = await Notification.updateMany({id_event: id_event}, { published: true});
            const modifiedCount = publishedState.modifiedCount

            if (modifiedCount !=  0) {
                res.status(200).json({ message: 'Notificaciones actualizadas con éxito', data: id_event });
            } else {
                res.status(500).json({ message: 'Error al actualizar las notificaciones' });
            }
        } else {
            res.status(404).json({ message: 'No se encontraron notificaciones no publicadas' });
        }

              
    }catch(e){
        console.error(e)
        res.status(400).json({"message":"Hubo un error al obtener la última notificación-"})
    }
}