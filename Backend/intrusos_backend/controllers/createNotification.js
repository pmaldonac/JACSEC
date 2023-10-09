const Notification = require("../models/notificationModel")
const moment = require("moment")

exports.createNotification = async (req, res) =>{
    if (!req.body.imagen) {
      res.status(400).send({ message: "Debe estar completo el campo imagen" });
      return;
    }
    try{
        var imagen = req.body.imagen
        //Cambiar la hora
        const momentObj = moment(imagen.substring(46,60),"YYYYMMDDHHmmss")
        const offsetMinutes = momentObj.utcOffset()
        const momentWithOffset = momentObj.clone().add(offsetMinutes, 'minutes');
        const date = momentWithOffset.toDate()

        console.log(date)
        const notifications = new Notification({
            tipo: imagen.substring(34,35) == "I" ? "Intruso" : "Patente",
            gravedad: "",
            imagen: imagen,
            published: false,
            descripcion: "",
            fecha: date,
            camara:  imagen.substring(39,40)
        });
        await notifications.save()
        res.status(200).send({ message: "Notificación creada con éxito!" });
    }catch(e){
        res.send(e)
        console.error(e)
    }
  };