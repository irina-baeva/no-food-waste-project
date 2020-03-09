const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const Profile = require('../../models/Profile')
const User = require('../../models/User')
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


module.exports = router