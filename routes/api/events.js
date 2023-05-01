//* Routing Logic

const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


//* POST 
router.post('/', eventsCtrl.create);

module.exports = router;