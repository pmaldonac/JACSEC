const notificationController = require("../controllers/updatePublishedState")
var router = require("express").Router()

router.post("/updatePublishedState",notificationController.updatePublishedStateController)

module.exports = router