
const notificationController = require("../controllers/getAllNotifications")
var router = require("express").Router()

router.get("/visitas",notificationController.getAllVisitas)

module.exports = router