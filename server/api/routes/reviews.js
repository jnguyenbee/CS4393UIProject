const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Review = require('../models/review');
const Product = require('../models/product');
//must use productId in postman
router.post('/', (req, res, next) => {
    Product.findById(req.body.productId)
        .then(product => {
            if (!product) {
                return res.status(404).json({
                    message: 'Product not found'
                });
            }
            const review = new Review({
                _id: mongoose.Types.ObjectId(),
                username: req.body.username,
                rating: req.body.rating,
                description: req.body.description,
                product: req.body.productId
            })
            return review.save();
        })
        .then(result => {
            console.log(result);
            res.status(201).json({
            message: 'posted review to reviews db',
            orderInfo: {
                _id: result._id,
                product: result.product,
                username: result.username,
                rating: result.rating,
                description: result.description

            },
            request: {
                type: 'GET',
                url: 'http://localhost:3000/reviews/' + result._id
            }
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
//in postman, must post field to propName and actual value to value field
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