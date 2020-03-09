const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const { check, validationResult } = require("express-validator");

// first we want route for our profile
//@route GET api/profile/me
//@desc get current user's profile
//@access private
router.get('/me', auth, async (req, res) => {
    try{
        profile = await Profile.findOne({user: req.user.id}).populate('user', ['name', 'avatar'])
        //check if no profile
        if(!profile) {
            return res.status(400).json({msg: "There is no profile for the user"})
        }
        //if thre is profile so we send profile
        res.json(profile)
    } catch(err){
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

//@route POST api/profile
//@desc  Create or Update user profile
//@access private

//we going to use Auth middleware and Validation middleware 
router.post('/', [auth, [
    check('location', 'Location is required').not().isEmpty()
]], 
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
const {location, bio, position, githubusername, linkedin, twitter} = req.body;
//build profile object
const profileFields = {};
//we get user from user id
profileFields.user = req.user.id;
//we check if there is other fields
if(location) profileFields.location = location;
if(bio) profileFields.location = bio;
if(position) profileFields.location = position;
if(githubusername) profileFields.location = githubusername;
//for social is different, we build object and then check
profileFields.social = {}
if(linkedin) profileFields.social.linkedin = linkedin;
if(twitter) profileFields.social.twitter = twitter;
})
module.exports = router