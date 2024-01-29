const express = require('express')

const controller = require('../controller/user.controller')

const router = express.Router()

//ROUTE FOR USER SIGNUP
router.post('/signup', controller.signup)

//ROUTE FOR USER LOGIN
router.post('/login', controller.login)

module.exports = router
