const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let quizSchema = new Schema(
  {
    question_number: {
      type: String,
      required: true,
    },
    question: {
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
    corret_answer: {
      type: String,
      required: true,
    }
  },

  {
    collection: "Quiz",
  }
);

module.exports = mongoose.model("Quiz", quizSchema);