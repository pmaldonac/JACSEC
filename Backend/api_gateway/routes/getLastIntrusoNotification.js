var router = require("express").Router()
const Controller = require("../controllers/getLastIntrusoNotification")

router.get("/intruso/lastNotification", Controller.getLastIntrusoNotificationController)

module.exports = router