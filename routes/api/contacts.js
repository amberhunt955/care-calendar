//* Routing Logic

const express = require('express');
const router = express.Router();
const contactsCtrl = require('../../controllers/api/contacts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


//* POST 
router.post('/', contactsCtrl.create);

module.exports = router;