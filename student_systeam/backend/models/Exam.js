const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let examSchema = new Schema({
  Exam_Name: {
    type : String,
    required: true
 },
 section: {
    type : String,
    required: true
 },
 grade: {
     type : String,
     required: true
  },
 year: {
     type : String,
     required: true
  }

},

{
    collection: 'exams'
  })

module.exports = mongoose.model('Exam', examSchema)