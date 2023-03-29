var jwt = require("jsonwebtoken");
const tokenSec = "shhhhh"; // it is better to keep this in .env file

module.exports.signToken = (user_obj) => {
  return jwt.sign(user_obj, tokenSec);
};

module.exports.verifyToken = async (token) => {
  const user_obj = jwt.verify(token, tokenSec);
  return user_obj;
};
