var router = require("express").Router()
const Controller = require("../controllers/updatePublishedState")

router.get("/publishedState", Controller.updatePublishedState)

module.exports = router