const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product');

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
    });
    product.save();
    res.status(201).json({
        message: 'posted product to products db',
        productInfo: product,
    });
});

module.exports = router;