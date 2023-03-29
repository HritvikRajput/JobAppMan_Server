const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Education = new Schema({
  board_university: { type: String, require: true },
  score: { type: Number, require: true },
  score_type: { type: String, require: true, enum: ["CGPA", "Percentage"] },
});

module.exports = Education;
