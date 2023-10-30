var router = require("express").Router()
const Controller = require("../controllers/getAllNotifications")

router.get("/all", Controller.getAllNotificationsController)

module.exports = router