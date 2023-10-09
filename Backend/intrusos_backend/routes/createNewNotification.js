const notificationController = require("../controllers/createNotification")
var router = require("express").Router()

router.post("/createNotification",notificationController.createNotification)

module.exports = router