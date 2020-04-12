const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/order');
const Product = require('../models/product');


router.get('/', (req, res, next) => {
    Order.find()
    .select('product quantity _id')
    .exec()
    .then(docs => {
        res.status(200).json({
            count: docs.length,
            orders: docs.map( doc => {
                return {
                    _id: doc._id,
                    product: doc.product,
                    quantity: doc.quantity,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/orders/' + doc._id
                    }
                }
            })
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/', (req, res, next) => {
    Product.findById(req.body.productId)
        .then(product => {
            if (!product) {
                return res.status(404).json({
                    message: 'Product not found'
                });
            }
            const order = new Order({
                _id: mongoose.Types.ObjectId(),
                quantity: req.body.quantity,
                product: req.body.productId
            })
            return order.save();
        })
        .then(result => {
            console.log(result);
            res.status(201).json({
            message: 'posted order to orders db',
            orderInfo: {
                _id: result._id,
                product: result.product,
                quantity: result.quantity,
            },
            request: {
                type: 'GET',
                url: 'http://localhost:3000/orders/' + result._id
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

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Order.findById(id)
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
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});
*/
module.exports = router;