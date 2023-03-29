const mongoose = require("mongoose");
const User = require("./DB/User");

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/jobs"
  )
  .then(async () => {
    console.log("Connected!");
    // seed default user 
    const userModel = mongoose.model("User", User);
  const user = await userModel.findOneAndUpdate({
    email: 'admin@example.com',
    password: 'admin',
  }, {
    email: 'admin@example.com',
    password: 'admin',
  },{upsert:true});

  })
  .catch((err) => {
    console.error("Database connection error", err);
  });
