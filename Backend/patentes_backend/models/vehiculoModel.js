const mongoose = require("mongoose")

const vehiculoSchema = mongoose.Schema({
    patente: String,
    propietario: String
}
)

module.exports = mongoose.model('vehiculo', vehiculoSchema);