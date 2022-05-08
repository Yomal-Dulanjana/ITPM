let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

const { Component } = require('react');
// time Model
let timeSchema = require('../models/Time');

// CREATE time
router.route('/create-time').post((req, res, next) => {
 timeSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ time
router.route('/').get((req, res) => {
 timeSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single time
router.route('/edit-time/:id').get((req, res) => {
 timeSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update time
router.route('/update-time/:id').put((req, res, next) => {
 timeSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('time details updated successfully !')
    }
  })
})

// Delete subject
router.route('/delete-time/:id').delete((req, res, next) => {
 timeSchema.findByIdAndRemove(req.params.id, (error, data) => {
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