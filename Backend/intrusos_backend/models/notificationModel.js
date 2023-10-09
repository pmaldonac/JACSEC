const mongoose = require("mongoose")

const notificationSchema = mongoose.Schema({
    tipo: String,
    gravedad: String,
    imagen: String,
    published: Boolean,
    descripcion: String,
    camara: String,
    fecha: Date
}
)

module.exports = mongoose.model('notification', notificationSchema);