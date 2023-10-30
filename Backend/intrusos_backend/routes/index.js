const express = require('express');
const router = express.Router();

const createNewNotification = require("./createNewNotification")
const getAllNotifications = require("./getAllNotifications")
const getLastNotification = require("./getLastNotification")
const updatePublishedState = require("./updatePublishedState")
const updateLastNotification = require("./updateLastNotification")
const getLastNoPublishedNotification = require("./getLastNoPublishedNotification")

router.use("/",createNewNotification)
router.use("/",getAllNotifications)
router.use("/",getLastNotification)
router.use("/",updatePublishedState)
router.use("/", updateLastNotification)
router.use("/", getLastNoPublishedNotification)

module.exports = router

