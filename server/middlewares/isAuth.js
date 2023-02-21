const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.accessToken_secret, function (err, decoded) {
      if (err) {
        res.status = 401;
        throw new Error("Not authorized!");
      }
      req.user = decoded;
      console.log(req.user);
    });
  } else {
    res.status(401);
    throw new Error("Not authorized, No token");
  }
};
