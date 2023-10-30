var router = require("express").Router()
const Controller = require("../controllers/getNewNotifications")

router.get("/intrusos/newnotification", Controller.getNewNotificationsController)

module.exports = router