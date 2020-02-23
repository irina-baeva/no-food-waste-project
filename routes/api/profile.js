const express = require('express')

const router = express.Router()
// @route GET api/auth
//@desc Test route
//@access public or provate
router.get('/', (req, res) => res.send('Profiel rout'))

module.exports = router