
const notificationController = require("../controllers/getLastVisitor")
var router = require("express").Router()

router.get("/LastVisitor",notificationController.getLastVisitaController)

module.exports = router