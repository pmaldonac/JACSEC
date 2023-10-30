const notificationController = require("../controllers/getAllNotifications")
var router = require("express").Router()

router.get("/Notifications",notificationController.getAllNotificationsController)

module.exports = router