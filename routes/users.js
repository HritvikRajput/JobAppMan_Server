var express = require("express");
var router = express.Router();
let JobApplicants = require("../DB/JobApplicants");
/* GET users listing. */
router.post("/create/jobApplicant", async function (req, res, next) {
  //need to validate before inserting in db
  const JobApplicantModel = mongoose.model("JobApplicants", JobApplicants);
  const ja = new JobApplicantModel(req.body);
  return await ja.save();
});

module.exports = router;
