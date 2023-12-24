const express = require('express')
const { registerVolunteer, loginVolunteer, getLoggedUser, searchVolunteer } = require('../controllers/volunteerControllers')

// const protect = require('../middlewares/authMiddleware')

const router = express.Router()

// router.route('/').post(registerUser).get(protect,allUsers)
router.route('/').get(searchVolunteer).post(registerVolunteer)
router.route('/login').post(loginVolunteer).get(getLoggedUser)

module.exports = router