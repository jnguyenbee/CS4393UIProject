const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Address = require('../models/address');

router.post('/', (req, res, next) => {
    const address = new Address({
        _id: new mongoose.Types.ObjectId(),
        street: req.body.street,
        zipcode: req.body.zipcode,
        state: req.body.state,
        city: req.body.city,
        phoneNumber: req.body.phoneNumber,
    });
    address.save()
        .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'posted address to addresses db',
            addressInfo: address
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
    Address.find()
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

router.get('/:addressId', (req, res, next) => {
    const id = req.params.addressId;
    Address.findById(id)
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

router.patch('/:addressId', (req, res, next) => {
    const id = req.params.addressId;
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Address.update({ _id : id}, 
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

router.delete('/:addressId', (req, res, next) => {
    const id = req.params.addressId;
    Address.remove({ _id : id})
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