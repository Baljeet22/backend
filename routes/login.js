///Declaring Dependencies///
const express = require("express");
const router = express.Router(); ///Getting Router from express to use
const users = require("../models/user_info");
const bcrypt = require("bcrypt"); //encrption module
///End-Declaring Dependencies///

var passwordFromUser = '';
router.post("/", async (req, res) => {
  passwordFromUser = req.body.password;
  try {
    const user = await users.find(
      {
        ///Conditional object to fetch records from collection///
        email: req.body.email,
      }
    );
    async function compare(encrypted) {
      const match = await bcrypt.compare(passwordFromUser, encrypted) //Dycrption function
      if (match) {
        var temp = {
          "login": true
        }
        res.json(temp)
      }
      else {
        var temp = {
          "login": false
        }
        res.json(temp)
      }
    }
    compare(user[0].password)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
