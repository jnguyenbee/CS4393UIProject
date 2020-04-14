const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user');

router.post('/signup', (req, res, next) => {
    User.find({ userName: req.body.userName })
    .exec()
    .then(user => {
        if (user.length >= 1) {
          return res.status(409).json({
            message: "user exists already"
          });
        } 
        else {
            const user = new User({
            _id: new mongoose.Types.ObjectId(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            password: req.body.password,
            email: req.body.email
        });
        user.save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: 'signup successful',
                    userInfo: user
                });
            })}
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post("/login", (req, res, next) => {
    User.find({ userName: req.body.userName, password: req.body.password })
      .exec()
      .then(user => {
        if (user.length < 1) {
            return res.status(401).json({
              message: "username and/or password incorrect"
            });
          }
        else {
            return res.status(200).json({
                message: "Login successful",
                userName: req.body.userName
              });
        }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.get('/', (req, res, next) => {
    User.find()
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


router.get('/:userId', (req, res, next) => {
    const id = req.params.userId;
    User.findById(id)
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

router.patch('/:userId', (req, res, next) => {
    const id = req.params.userId;
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    User.update({ _id : id}, 
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

router.delete('/:userId', (req, res, next) => {
    const id = req.params.userId;
    User.remove({ _id : id})
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