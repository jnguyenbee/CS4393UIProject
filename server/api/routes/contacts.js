const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Contact = require('../models/contact');

router.post('/', (req, res, next) => {
    const contact = new Contact({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        description: req.body.description,
    });
    contact.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'posted contact to contacts db',
            contactInfo: contact
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.get('/', (req, res, next) => {
    Contact.find()
    .exec()
    .then(docs => {
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.get('/:contactId', (req, res, next) => {
    const id = req.params.contactId;
    Contact.findById(id)
    .exec()
    .then(doc => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.patch('/:contactId', (req, res, next) => {
    const id = req.params.contactId;
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Contact.update({ _id : id}, 
        { $set: updateOps })
        .exec()
        .then(result => {
        console.log(result);
        res.status(200).json(result);
        })
        .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
            });
        });
});

router.delete('/:contactId', (req, res, next) => {
    const id = req.params.contactId;
    Contact.remove({ _id : id})
    .exec()
    .then(result => {
        res.status(200).json(result);   
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;