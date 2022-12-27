
const express = require('express');
const router = express.Router();

const logincontrollers = require('../app/controllers/LoginControllers')

router.get('/signup', logincontrollers.signup);
router.get('/', logincontrollers.login);

module.exports = router;