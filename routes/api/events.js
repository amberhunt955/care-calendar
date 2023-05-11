//* Routing Logic
const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//* Event Routes
// create new event 
router.post('/', eventsCtrl.createEvent);

// find all events
router.get('/', eventsCtrl.getAllEvents);

// populate contact
router.put('/:eventId', eventsCtrl.populateContact)

module.exports = router;