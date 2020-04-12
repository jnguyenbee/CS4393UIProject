const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Review = require('../models/review');

router.post('/', (req, res, next) => {
    const review = new Review({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        rating: req.body.rating,
        description: req.body.description,
    });
    review.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'posted review to reviews db',
            reviewInfo: review
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
    Review.find()
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


router.get('/:reviewId', (req, res, next) => {
    const id = req.params.reviewId;
    Review.findById(id)
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

router.patch('/:reviewId', (req, res, next) => {
    const id = req.params.reviewId;
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Review.update({ _id : id}, 
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

router.delete('/:reviewId', (req, res, next) => {
    const id = req.params.reviewId;
    Review.remove({ _id : id})
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