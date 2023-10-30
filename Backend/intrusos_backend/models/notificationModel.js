const mongoose = require("mongoose")

const notificationSchema = mongoose.Schema({
    id_event: String,
    alert_type: String,
    severity: String,
    image_url: String,
    published: Boolean,
    description: String,
    camera: String,
    date: Date
}
)

module.exports = mongoose.model('notifications', notificationSchema);