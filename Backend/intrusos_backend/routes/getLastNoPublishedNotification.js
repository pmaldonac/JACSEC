const notificationController = require("../controllers/getLastNoPublishedNotification")
var router = require("express").Router()

router.get("/NoPublished/notification",notificationController.getLastNoPublishedNotificationController)

module.exports = router