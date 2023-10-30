const notificationController = require("../controllers/createVisitor")
var router = require("express").Router()

router.post("/createNotification",notificationController.createNotification)

module.exports = router