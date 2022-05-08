let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

const { Component } = require('react');
// exam Model
let examSchema = require('../models/Exam');

// CREATE exam
router.route('/create-exam').post((req, res, next) => {
 examSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ exam
router.route('/').get((req, res) => {
 examSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single exam
router.route('/edit-exam/:id').get((req, res) => {
 examSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update exam
router.route('/update-exam/:id').put((req, res, next) => {
 examSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('exam updated successfully !')
    }
  })
})

// Delete exam
router.route('/delete-exam/:id').delete((req, res, next) => {
 examSchema.findByIdAndRemove(req.params.id, (error, data) => {
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