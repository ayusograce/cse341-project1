// controllers/contactsController.js
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;



// Controller functions for handling contacts
const getAllContacts = async (req, res) => {
    const result = await mongodb.getDataBase().db().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
});
};

// Get contact by ID
const getContactById = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDataBase().db().collection('contacts').find({ _id: contactId });
    result.toArray().then((contact) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contact[0]);
    });
};

// Create a new contact
const createContact = async (req, res) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
    };
    const response = await mongodb.getDataBase().db().collection('contacts').insertOne(contact);
    res.setHeader('Content-Type', 'application/json');
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'An error occurred while creating the contact');
    }
};

// Update an existing contact
const updateContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
    };
    const response = await mongodb.getDataBase().db().collection('contacts').replaceOne({_id: contactId}, contact);
    res.setHeader('Content-Type', 'application/json');
    // Check if the update was successful
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'An error occurred while updating the contact');
    }
};

// Delete a contact
const deleteContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id);  
    const response = await mongodb.getDataBase().db().collection('contacts').deleteOne({ _id: contactId });
    res.setHeader('Content-Type', 'application/json');
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'An error occurred while deleting the contact');
    }
};



// Export the functions to be used in the routes
module.exports = {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
};