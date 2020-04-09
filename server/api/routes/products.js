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
    }
});
const upload = multer({storage: storage});
const Product = require('../models/product');

router.get('/', (req, res, next) => {
    Product.find()
    .exec()
    .then(docs => {
        console.log(docs);
        /*products: docs.map( doc => {
            return {
                name: doc.name,
                price: doc.price,
                productImage: doc.productImage,
                _id: doc._id,
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/prodcuts/' + doc._id
                }
            }
        })*/
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/', upload.single('productImage'),(req, res, next) => {
    console.log(req.file);
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        productImage: req.file.path
    });
    product.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'posted product to products db',
            productInfo: product
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
    Product.findById(id)
    .exec()
    .then(doc => {
    console.log("from database", doc);
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

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }

    Product.update({ _id : id}, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
});

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.remove({ _id : id})
    .exec()
    .then(result => {
        res.status(200).json(result);   
    })
});

module.exports = router;