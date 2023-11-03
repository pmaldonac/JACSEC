const express = require('express');
const router = express.Router();

const getAllNotifications = require("./getAllNotifications")
const getNewNotifications = require("./getNewNotification")
const updatePublishedState = require("./updatePublishedState")
const getLastIntrusoNotification = require("./getLastIntrusoNotification")
const updateNotification = require("./updateNotification")

router.use("/",getAllNotifications)
router.use("/",getNewNotifications)
router.use("/", updatePublishedState)
router.use("/", getLastIntrusoNotification)
router.use("/", updateNotification)


module.exports = router

