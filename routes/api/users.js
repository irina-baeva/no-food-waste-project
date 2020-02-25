const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')

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
        // See if user exist

        // Get user gravatar (based on email)

        // Encrypt password using

        // Return jsonwebtocken
        res.send('This is user rout')
    })

module.exports = router