let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

const { Component } = require('react');
// quiz Model
let quizSchema = require('../models/Quiz');

// CREATE quiz
router.route('/create-quiz').post((req, res, next) => {
 quizSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ quizs
router.route('/').get((req, res, next) => {
 quizSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single quiz
router.route('/edit-quiz/:id').get((req, res , next) => {
 quizSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update quiz
router.route('/update-quiz/:id').put((req, res, next) => {
 quizSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('quiz updated successfully !')
    }
  })
})

// Delete quiz
router.route('/delete-quiz/:id').delete((req, res, next) => {
 quizSchema.findByIdAndRemove(req.params.id, (error, data) => {
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