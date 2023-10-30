
const visitaController = require("../controllers/updateLastVisitor")
var router = require("express").Router()

router.put("/UpdateLastNotification",visitaController.updateLastVisitaController)

module.exports = router