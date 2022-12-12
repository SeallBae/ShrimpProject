
const express = require('express');
const router = express.Router();

const sitecontrollers = require('../app/controllers/SiteControllers')


router.use('/', sitecontrollers.index);

module.exports = router;