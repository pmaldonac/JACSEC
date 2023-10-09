const notificationController = require("../controllers/updateLastNotification")
var router = require("express").Router()

router.put("/UpdateLastNotification",notificationController.updateLastNotificationController)

module.exports = router