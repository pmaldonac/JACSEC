const axios = require("axios")
exports.getNewNotificationsController = async(req,res) =>{
    try{
        const response = await axios.get("http://localhost:8080/NoPublished/notification")
        if(response.data != null){
            const data = response.data
            const updatePublishedState = await axios.post("http://localhost:8080/updatePublishedState",{"id_event" : data.id_event})
            res.json(data)
        }else{
            res.status(400).json({"message": "No existen notificaciones nuevas"})
        }
        
    }catch(e){
        console.error(e)
        res.status(400).json({"message": "Hubo un error al obtener todas las notificaciones"})
    }
}