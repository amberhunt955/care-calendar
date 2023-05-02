//* Routing Logic

const express = require('express');
const router = express.Router();
const contactsCtrl = require('../../controllers/api/contacts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//* POST 
router.post('/', contactsCtrl.create);

router.get('/my-contact-list', contactsCtrl.getAllContacts);

router.delete('/my-contact-list/:id', contactsCtrl.deleteContact);

module.exports = router;