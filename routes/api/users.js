const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')

const {
    check,
    validationResult
} = require('express-validator');
// bring user model
const User = require('../../models/User')

// @route   POST api/auth
//@desc     Register user
//@access   public or provate
router.post('/', [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Include valid email').isEmail(),
        check('password', 'Please, enter a password with 6 or more characters').isLength({
            min: 6
        })

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
        const {
            name,
            email,
            password
        } = req.body;
        try {
            // See if user exist
            let user = await User.findOne({
                email: email
            })
            if (user) {
                return res.status(400).json({
                    errors: [{
                        msg: 'User already exists'
                    }]
                })
            }
            // Get user gravatar (based on email)
            const avatar = gravatar.url(email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            })
            //create new user instance (not save yet) and password is not encrypted
            user = new User({
                name,
                email,
                avatar,
                password
            })
            // Encrypt password using
            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            //now save user to DB
            await user.save();
            // Return jsonwebtocken
            res.send('User registered')
        } catch (err) {
            console.error(err.message)
            res.status(500).send('Server error')
        }
    })

module.exports = router