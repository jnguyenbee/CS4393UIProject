const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/order');

/*router.get('/', (req, res, next) => {
    Product.find()
    .exec()
    .then(docs => {
        res.status(200).json(docs);
    })
});
*/
router.post('/', (req, res, next) => {
    const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.productId
    });
    order.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'posted product to products db',
            orderInfo: order
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});
/*
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
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
*/
/*router.patch('/:boardgameId', (req, res, next) => {
    const id = req.params.boardgameId;
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }

    Boardgame.update({ _id : id}, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
});

router.delete('/:boardgameId', (req, res, next) => {
    const id = req.params.boardgameId;
    Boardgame.remove({ _id : id})
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
});
*/
module.exports = router;