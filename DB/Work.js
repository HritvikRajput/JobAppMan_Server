const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Workexpiriance = new Schema({
  compnay: { type: String, require: true },
  designation: { type: String, require: true },
  from: { type: Date, require: true },
  to: { type: Date, require: true },
});

module.exports = Workexpiriance;
