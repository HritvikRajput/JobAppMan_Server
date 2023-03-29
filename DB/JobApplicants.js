const mongoose = require("mongoose");
const Education = require("./Education");
const Language = require("./Language");
const TechExpiriance = require("./TechExpirance");
const Workexpiriance = require("./Work");
const Schema = mongoose.Schema;
const JobApplicants = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  address: { type: String },
  gender: {
    type: String,
    require: true,
    enum: ["male", "female", "Other"],
    default: "Male",
  },
  contact: { type: String, require: true },
  location: { type: String, require: true },
  expected_ctc: { type: Number, require: true },
  current_ctc: { type: Number, require: true },
  notice_period: { type: Number, require: true },
  education: [Education],
  work: [Workexpiriance],
  language: [Language],
  tech_expiriance: [TechExpiriance],
});

module.exports = JobApplicants;
