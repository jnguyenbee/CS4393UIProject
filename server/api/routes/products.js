const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });
const Product = require('../models/product');

router.post('/', upload.single('productImage'), (req, res, next) => {
    console.log('reached here to post');
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        size: req.body.size,
        color: req.body.color,
        quantity: req.body.quantity,
        description: req.body.description,
        productImage: req.file.path,
    });

    product
        .save()
        .then((result) => {
            console.log(result);
            res.status(201).json({
                message: 'posted product to products db',
                productInfo: product,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
});

router.get('/', (req, res, next) => {
    Product.find()
        .exec()
        .then((docs) => {
            res.status(200).json(docs);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
        .exec()
        .then((doc) => {
            console.log('from database', doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({ message: 'No valid entry found for provided ID' });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
});

router.patch('/:productId', upload.single('productImage'), (req, res, next) => {
    console.log(req.body.description);
    console.log(req.body.name);
    console.log(req.body.color);

    const id = req.params.productId;
    console.log(id);
    //const updateOps = {};

    Product.updateMany({ _id: id }, { $set: req.body })
        .exec()
        .then((result) => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
    /*
                for (const ops of req.body) {
                    updateOps[ops.propName] = ops.value;
                    console.log('Stuck');
                    console.log(ops.value);
                }
                Product.update({ _id: id }, { $set: updateOps })
                    .exec()
                    .then((result) => {
                        console.log(result);
                        res.status(200).json(result);
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(500).json({
                            error: err,
                        });
                    });
                */
});

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.deleteOne({ _id: id })
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
});

module.exports = router;