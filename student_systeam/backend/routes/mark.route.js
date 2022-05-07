let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

const { Component } = require('react');
// mark Model
let markSchema = require('../models/Mark');

// CREATE quiz
router.route('/create-mark').post((req, res, next) => {
 markSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ marks
router.route('/').get((req, res, next) => {
 markSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single mark
router.route('/edit-mark/:id').get((req, res , next) => {
 markSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update mark
router.route('/update-mark/:id').put((req, res, next) => {
 markSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('mark updated successfully !')
    }
  })
})

// Delete mark
router.route('/delete-mark/:id').delete((req, res, next) => {
 markSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;