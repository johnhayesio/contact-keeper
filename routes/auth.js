const express = require('express');
const router = express.Router();

// @router      GET api/auth
// @desc        Get logged in user
// @access      Private
router.get('/', (req, res) => {
  res.send('Get logged in user')
})

// @router      POST api/auth
// @desc        Auth user & get token
// @access      Public
router.post('/', (req, res) => {
  res.send('Logged in user')
})

module.exports = router;
