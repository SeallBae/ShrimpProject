
const express = require('express');
const router = express.Router();

const newcontrollers = require('../app/controllers/NewsControllers')

router.get('/', newcontrollers.index);

module.exports = router;