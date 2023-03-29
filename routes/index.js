var express = require("express");
const { default: mongoose } = require("mongoose");
const User = require("../DB/User");
const { signToken, verifyToken } = require("../services/jwthelper");
const JobApplicants = require("../DB/JobApplicants");
var router = express.Router();

const authGurd = async (req, rep, next) => {
  const token = req.body.token;
  try {
    const email = await verifyToken(token);
    next();
  } catch (err) {
    rep.status(404).json({ error: err }).send();
  }
};
/* admin routes. */
//private routes
//currenly stored password as a string but good practies if stored after encrypt
router.post("/login", async function (req, res, next) {
  const userModel = mongoose.model("User", User);
  const user = await userModel.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (!user) {
    res.status(400).json({ error: "user not found" }).send();
  }
  const token = signToken(user.email);
  res.setHeader("Content-Type", "application/json");
  res.json({ ...user._doc, token: token }).send();
});

router.get("/jobApplicants", async function (req, res, next) {
  const JobApplicantsModel = mongoose.model("JobApplicants", JobApplicants);
  const data = await JobApplicantsModel.find({});


  res.json(data).send();
});

router.get("/jobApplicant/:id", authGurd, async function (req, res, next) {
  const id = req.params.id;
  const JobApplicantsModel = mongoose.model("JobApplicants", JobApplicants);
  if (!id) res.status(400).json({ error: "invalid id" }).send();
  const ja = await JobApplicantsModel.findOne({ _id: id });
  if (!ja) res.status(404).json({ error: "Id not found" }).send();
  res.json(ja).send();
});

router.post(
  "/jobApplicant/edit/:id",
  authGurd,
  async function (req, res, next) {
    const id = req.params.id;
    const JobApplicantsModel = mongoose.model("JobApplicants", JobApplicants);
    const ja = await JobApplicantsModel.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        _new: true,
      }
    );
    res.json(ja).send();
  }
);
router.delete(
  "/jobApplicant/delete/:id",
  authGurd,
  async function (req, res, next) {
    const id = req.params.id;
    const JobApplicantsModel = mongoose.model("JobApplicants", JobApplicants);
    const ja = await JobApplicantsModel.findOneAndDelete({ _id: id });
    res.json(ja).send();
  }
);

module.exports = router;
