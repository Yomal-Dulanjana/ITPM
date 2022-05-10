let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

const { Component } = require('react');
// quiz Model
let answerSchema = require('../models/Answer');

// CREATE quiz
router.route('/student-quiz').post((req, res, next) => {
 answerSchema.create(req.body, (error, data) => {
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
 answerSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single quiz
router.route('/create-mark/:id').get((req, res , next) => {
 answerSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update quiz
router.route('/create-mark/:id').put((req, res, next) => {
 answerSchema.findByIdAndUpdate(req.params.id, {
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
 answerSchema.findByIdAndRemove(req.params.id, (error, data) => {
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