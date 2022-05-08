let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

const { Component } = require('react');
// subject Model
let subjectSchema = require('../models/Subject');

// CREATE subject
router.route('/create-subject').post((req, res, next) => {
 subjectSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ subjects
router.route('/').get((req, res) => {
 subjectSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single subject
router.route('/edit-subject/:id').get((req, res) => {
 subjectSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update subject
router.route('/update-subject/:id').put((req, res, next) => {
 subjectSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('subject details updated successfully !')
    }
  })
})

// Delete subject
router.route('/delete-subject/:id').delete((req, res, next) => {
 subjectSchema.findByIdAndRemove(req.params.id, (error, data) => {
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