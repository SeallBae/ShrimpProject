
const express = require('express');
const router = express.Router();

const pondcontrollers = require('../app/controllers/PondControllers')

router.get('/create', pondcontrollers.create);
router.post('/store', pondcontrollers.store);
router.get('/:id/configure', pondcontrollers.configure);
router.get('/:slug/randominlimit', pondcontrollers.randominlimit);
router.get('/:slug/randomoutlimit', pondcontrollers.randomoutlimit);
router.put('/:id/', pondcontrollers.update);
router.delete('/:id', pondcontrollers.delete);
router.get('/:slug', pondcontrollers.show);

module.exports = router;