const express = require('express')
const { taskRegister } = require('../controllers/taskController')

// const protect = require('../middlewares/authMiddleware')

const router = express.Router()
router.route('/').get().post(taskRegister)

module.exports = router