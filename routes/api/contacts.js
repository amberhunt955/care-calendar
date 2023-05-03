//* Routing Logic
const express = require('express');
const router = express.Router();
const contactsCtrl = require('../../controllers/api/contacts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//* Contact Routes
// create new contact
router.post('/', contactsCtrl.createContact);

// find all contacts
router.get('/my-contact-list', contactsCtrl.getAllContacts);

// find one contact
router.get('/form/:contactId', contactsCtrl.findContact)

// update contact
router.put('/my-contact-list/:id/edit', contactsCtrl.updateContact);

// delete contact
router.delete('/my-contact-list/:id', contactsCtrl.deleteContact);

// add event to contact
router.post(':contactId/add-new-event/:eventId', contactsCtrl.addEventToContact)


module.exports = router;