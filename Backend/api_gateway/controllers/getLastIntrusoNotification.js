const axios = require("axios")
exports.getLastIntrusoNotificationController = async(req,res) =>{
    try{
        const response = await axios.get("http://localhost:8080/lastNotification")
        /*const response2 = await axios.get("http://localhost:7070/visitas")
        const data = {"intrusos" : response.data, "patentes": response2.data}
        */
        const data = response.data
        res.json(data)
    }catch(e){
        console.error(e)
        res.status(400).json({"message": "Hubo un error al obtener la última notificación"})
    }
}