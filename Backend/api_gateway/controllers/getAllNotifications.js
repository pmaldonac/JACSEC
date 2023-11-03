const axios = require("axios")

function convertDateToString(dateString) {
    const date = new Date(dateString); // Crear un objeto Date a partir de la cadena de tiempo


    const dia = date.getDate().toString().padStart(2, '0');
    const mes = (date.getMonth() + 1).toString().padStart(2, '0');
    const anio = date.getFullYear();

    const fecha = `${dia}-${mes}-${anio}`;

    const hora = date.toISOString().substr(11, 5); 
    return [fecha, hora];
}


exports.getAllNotificationsController = async(req,res) =>{
    try{
        const response = await axios.get("http://localhost:8080/Notifications")
        if (response.data != []){
            const data = response.data

            const IntrusosEvents = []
            for (const element of data) {
                const date = new Date(element.date)
                const dateString = convertDateToString(date)
                const descripcion = element.description

                IntrusosEvents.push({"fecha": dateString[0], "hora":dateString[1], "descripcion": descripcion})
            }
            res.status(200).json(IntrusosEvents)
        }else{
            res.status(404).json({"Message": "No hay notificaciones"})
        }
        


        /*const response2 = await axios.get("http://localhost:7070/visitas")
        const data = {"intrusos" : response.data, "patentes": response2.data}
        */
       
        
    }catch(e){
        console.error(e)
        res.status(400).json({"message": "Hubo un error al obtener todas las notificaciones"})
    }
}