const express = require('express')

const router = express.Router()
// @route GET api/auth
//@desc Test route
//@access public or provate
router.get('/', (req, res) => res.send('AUth rout'))

module.exports = router