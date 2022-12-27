
const express = require('express');
const router = express.Router();

const sitecontrollers = require('../app/controllers/SiteControllers')


router.get('/', sitecontrollers.index);

module.exports = router;