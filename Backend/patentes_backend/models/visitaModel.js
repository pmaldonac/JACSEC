const mongoose = require("mongoose")

const visitaSchema = mongoose.Schema({
    id_vehiculo: String, 
    n_casa: String,
    rut_conductor: String,
    hora_entrada: Date,
    hora_salida: Date,
    foto_url: String,
    published: Boolean
}
)

module.exports = mongoose.model('visitas', visitaSchema);