const express = require('express')
const router = express.router()

router.get('/', UserController.getUsers)

module.exports = router