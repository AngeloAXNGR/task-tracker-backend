import express from 'express';

const {loginUser, signupUser} = require('../controllers/userController');

const router = express.Router()


// login route
router.post('/user/login', loginUser)


// signup route
router.post('/user/signup', signupUser)

module.exports = router