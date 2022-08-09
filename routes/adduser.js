///Declaring Dependencies///
const express = require("express");
const router = express.Router(); ///Getting Router from express to use
const users = require("../models/user_info");
const bcrypt = require("bcrypt"); //encrption module
///End-Declaring Dependencies///

router.post("/", async (req, res) => {
  ////Encrypting passwod field////
  async function encryptPassword(password) {
    //Function for encryption
    const salt = await bcrypt.genSalt(5);
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
  }
  var encryptedPasswod = encryptPassword(req.body.password);
  ////END-Encrypting passwod field////
  encryptedPasswod.then((data) => {
    /////Creating Json object to push in collection////
    const user = new users({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      password: data,
      phone: req.body.phone,
      sex: req.body.sex,
    })
    const addUser = async () => {
      //Adding user into database
      try {
        const newUser = await user.save();
        res.status(201).json(newUser);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    };
    addUser();
  });
});
module.exports = router;
