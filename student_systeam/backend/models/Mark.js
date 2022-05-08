const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let markSchema = new Schema(
  {
    studentID: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    marks: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    
  },

  {
    collection: "marks",
  }
);

module.exports = mongoose.model("Mark", markSchema);