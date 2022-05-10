const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let answerSchema = new Schema(
  {
    student_id: {
      type: String,
      required: true,
    },
    student_name: {
      type: String,
      required: true,
    },
    answer_1: {
      type: String,
      required: true,
    },
    answer_2: {
      type: String,
      required: true,
    },
    answer_3: {
      type: String,
      required: true,
    },
    answer_4: {
      type: String,
      required: true,
    },
    answer_5: {
      type: String,
      required: true,
    }
  },

  {
    collection: "answers",
  }
);

module.exports = mongoose.model("Answer", answerSchema);