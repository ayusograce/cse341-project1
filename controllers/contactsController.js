const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllContacts = async (req, res) => {
    const result = await mongodb.getDataBase().db().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
});
};

const getContactById = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDataBase().db().collection('contacts').find({ _id: contactId });
    result.toArray().then((contact) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contact[0]);
    });
};

module.exports = {
    getAllContacts,
    getContactById
};