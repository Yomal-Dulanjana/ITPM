const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let teacherSchema = new Schema({
  cid: {
    type : String,
    required: true
 },
 first_name: {
    type : String,
    required: true
 },
 last_name: {
     type : String,
     required: true
  },
 department: {
     type : String,
     required: true
  },
 contac_No: {
     type : Number,
     required: true
  },
 email: {
     type : String,
     required: true
  }
 
},

{
    collection: 'teachers'
  })

module.exports = mongoose.model('Teacher', teacherSchema)