const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
// we bring middleware auth
const auth = require('../../middleware/auth')
const User = require('../../models/User')
// @route GET api/auth
//@desc Test route
//@access public or provate
//if we pass auth like 3rd parameter it is already make rout protected
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user)
    } catch (err){
        console.log(err)
        res.status(500).send('Server error')
    }
})

// @route   POST api/auth
//@desc     Authentificate user and get token
//@access   public 
router.post(
    "/",
    [
      check("email", "Include valid email").isEmail(),
      check(
        "password",
        "Password is requied"
      ).exists()
    ],
    async (req, res) => {
      // Finds the validation errors in this request and wraps them in an object
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array()
        });
      }
      // Destructure from body
      const {email, password } = req.body;
      try {
        // See if user exist
        let user = await User.findOne({
          email: email
        });
        if (!user) {
          return res.status(400).json({
            errors: [
              {
                msg: "Invalid Credentials"
              }
            ]
          });
        }
        //we have to match user and password bcrypt has a compare method for that
        //it takes plain text password and encrypted password and tells if it matches or no
        
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({
                errors: [
                  {
                    msg: "Invalid Credentials"
                  }
                ]
              });
        }


        // Return jsonwebtocken
        const payload = {
          user: {
            id: user.id
          }
        };
        jwt.sign(
          payload,
          config.get("jwtSecret"),
          { expiresIn: 360000 },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
      }
    }
  );

module.exports = router