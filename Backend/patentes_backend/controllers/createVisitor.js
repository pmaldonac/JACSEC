const Visita = require("../models/visitaModel")
const Vehiculo = require("../models/vehiculoModel")
const moment = require("moment")

exports.createNotification = async (req, res) =>{
    if (!req.body.imagen) {
      res.status(400).send({ message: "Debe estar completo el campo imagen" });
      return;
    }
    try{
        var cadena = req.body.imagen
        //Cambiar la hora
        //P_Pat_FTFD17_Date_20231011224059.png

        const primerGuionBajoIndex = cadena.indexOf('_');

        const segundoGuionBajoIndex = cadena.indexOf('_', primerGuionBajoIndex + 1)
        const tercerGuionBajoIndex = cadena.indexOf('_', segundoGuionBajoIndex + 1)
        const patente1 = cadena.substring(segundoGuionBajoIndex + 1, tercerGuionBajoIndex)
    

        // Obtener la fecha (ubicada después del el cuarto guion bajo)
        const cuartoGuionBajoIndex = cadena.indexOf('_', cadena.indexOf('_', cadena.indexOf('_') + 1) + 1);
        const fecha = cadena.substring(cuartoGuionBajoIndex + 1);

        const momentObj = moment(fecha,"YYYYMMDDHHmmss")
        const offsetMinutes = momentObj.utcOffset()
        const momentWithOffset = momentObj.clone().add(offsetMinutes, 'minutes');
        const date = momentWithOffset.toDate()
        const date2 = momentWithOffset.add(1, 'day').toDate();

        if(patente1){
            var id_vehiculo1 = await Vehiculo.findOne({patente: patente1}).exec()
            var id_vehiculo2 = id_vehiculo1
            if (id_vehiculo2 == null){
                var id_vehiculo1 = new Vehiculo({
                    patente: patente1,
                    propietario: ""
                })
                id_vehiculo2 = id_vehiculo1
                await id_vehiculo1.save()
                res.status(200).send({ message: "Notificación creada con éxito!" });
            }
            const visita1 = new Visita({
                id_vehiculo: id_vehiculo2._id, 
                n_casa: "",
                rut_conductor: "",
                hora_entrada: date,
                hora_salida: date2,
                foto_url: cadena,
                published: false
            });
            await visita1.save()
            res.status(200).send({ message: "Notificación creada con éxito!" });
        }else{
            res.status(200).send({ message: "No existe patente!" });
        }

       
    }catch(e){
        res.send(e)
        console.error(e)
    }
  };