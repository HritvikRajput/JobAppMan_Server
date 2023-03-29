const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Language = new Schema({
  name: { type: String, require: true },
  read: { type: Boolean, require: true, default: false },
  speak: { type: Boolean, require: true, default: false },
  speak: { type: Boolean, require: true, default: false },
});

module.exports = Language;
