
const express = require('express');
const router = express.Router();

const mecontrollers = require('../app/controllers/MeControllers')

router.get('/stored/ponds', mecontrollers.storedPonds);
router.post('/home', mecontrollers.home);

module.exports = router;