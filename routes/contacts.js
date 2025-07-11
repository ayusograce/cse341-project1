// routes/contacts.js
const express = require('express');
const router = express.Router();    
const contactsController = require('../controllers/contactsController');

// Define routes for contacts
router.get('/', contactsController.getAllContacts);

router.get('/:id', contactsController.getContactById);

router.post('/', contactsController.createContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);


// Export the router to be used in the main app
module.exports = router;