var router = require("express").Router()
const Controller = require("../controllers/updateNotification")

router.post("/intrusos/update", Controller.updateNotification)

module.exports = router