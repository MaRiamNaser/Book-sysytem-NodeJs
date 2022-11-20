const bodyParser = require("body-parser")
const db = require("../../DB/database")
const isEmailValid = require("./emailVerfied")
var emailValidator = require("email-validator");
const {
  User
} = db.models
const bcrypt = require('bcrypt');
const saltRounds = 10;

const registerUser = async (req, res) => {

  try {

    if (!req.body.email || !req.body.password) {
      res.status(400).send({
        msg: "Email or password is missing."
      })
    }
    const valid = await emailValidator.validate(req.body.email);
    if (valid) {
      User.findOne({
        where: {
          email: req.body.email
        }
      }).then(user => {
        if (!user) {
          bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(req.body.password, salt, function (err, hash) {
              //***************( Storing hash in password DB.)***********************

              User.create({
                  userName: req.body.userName,
                  email: req.body.email,
                  password: hash
                })
                .then(user => {
                  res.send(user);
                })
                .catch(err =>  res.send(err));
              //*********************************************************************
            });
          });
        }else{
          res.status(409).send("user already exist");
        }
      });
    } else {
      res.status(400).send({
        msg: "Please provide a valid email address.",
        //   reason: validators[reason].reason,
        "isvalid": valid
      })
    }
  } catch (e) {
    res.send({
      "msg": e
    })
  }

}
module.exports = registerUser