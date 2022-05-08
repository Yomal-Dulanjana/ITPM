const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let timeSchema = new Schema({
  day: {
    type : String,
    required: true
 },
 subject: {
    type : String,
    required: true
 },
 class: {
     type : String,
     required: true
  },
 teacher: {
     type :String,
     required: true
  },
 time: {
     type :String,
     required: true
  },
  date: {
    type :String,
    required: true
 }
},

{
    collection: 'times'
  })

module.exports = mongoose.model('Time', timeSchema)