const express = require('express')
const router = express.Router()
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

module.exports = router