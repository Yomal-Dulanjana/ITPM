const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({

 first_name: {
   type : String,
   required: true
},
last_name: {
  type : String,
  required: true
},
section: {
   type : String,
   required: true
},
email: {
    type : String,
    required: true
 },
 phone: {
  type : String,
  required: true
},
index: {
  type : String,
  required: true
},
 dob: {
    type : String,
    required: true
  }
},

{
    collection: 'students'
  })

module.exports = mongoose.model('Student', studentSchema)