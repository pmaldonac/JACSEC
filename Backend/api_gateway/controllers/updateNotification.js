const axios = require("axios")

exports.updateNotification = async (req,res) =>{
    try{
        const response = await axios.put("http://localhost:8080/UpdateLastNotification",{"gravedad": req.body.gravedad, "descripcion": req.body.descripcion})

        console.log(response)
        const data = response.data
        res.json(data)
    }catch(e){
        console.error(e)
        res.status(400).json({"message": "Hubo un error al actualizar la notificación"})
    }

}