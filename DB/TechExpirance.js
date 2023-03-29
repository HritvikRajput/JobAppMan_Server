const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TechExpiriance = new Schema({
  name: { type: String, require: true },
  expiriance_status: {
    type: String,
    require: true,
    enum: ["Beginner", "Mediator", "Expert"],
  },
});

module.exports = TechExpiriance;
