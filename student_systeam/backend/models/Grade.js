const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let gradeSchema = new Schema({
  Index_Num: {
    type : String,
    required: true
 },
 Student_Name: {
    type : String,
    required: true
 },
 grade: {
     type : String,
     required: true
  },
 section: {
     type : String,
     required: true
  },
  subject_01: {
    type : String,
    required: true
 },
 subject_02: {
  type : String,
  required: true
},
subject_03: {
  type : String,
  required: true
},
average: {
  type : String,
  required: true
},
place: {
  type : String,
  required: true
},
status: {
  type : String,
  required: true
}

},

{
    collection: 'grades'
  })

module.exports = mongoose.model('Grade', gradeSchema)