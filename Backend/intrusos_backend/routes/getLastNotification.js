const notificationController = require("../controllers/getLastNotification")
var router = require("express").Router()

router.get("/LastNotification",notificationController.getLastNotificationController)

module.exports = router