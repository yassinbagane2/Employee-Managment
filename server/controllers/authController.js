const db = require("../database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  db.query("select * from users where email = ?", [email], (err, rows) => {
    if (err) throw new Error("Email doesn't exist.");
    let user = rows[0];
    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        const error = new Error("Wrong password");
        error.statusCode = 401;
        throw error;
      } else {
        const accessToken = jwt.sign(
          {
            userId: user.id,
            email: user.email,
          },
          process.env.accessToken_secret,
          {
            expiresIn: "1y",
          }
        );
        return res.status(200).json({ accessToken });
      }
    });
  });
};

// exports.register = (req, res, next) => {

// };
