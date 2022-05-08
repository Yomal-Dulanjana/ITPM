const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let subjectSchema = new Schema({
  sname: {
    type : String,
    required: true
 },
 scode: {
    type : String,
    required: true
 },
 tname: {
     type : String,
     required: true
  },
 class: {
     type :String,
     required: true
  },
 language: {
     type :String,
     required: true
  }
},

{
    collection: 'subjects'
  })

module.exports = mongoose.model('Subject', subjectSchema)