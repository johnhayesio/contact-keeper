const express = require('express');
const router = express.Router();

// @router      GET api/contacts
// @desc        Get contacts
// @access      Private
router.get('/', (req, res) => {
  res.send('Get all contacts')
})

// @router      POST api/contacts
// @desc        Add contact
// @access      Private
router.post('/', (req, res) => {
  res.send('Add new contact')
})

// @router      PUT api/contacts/:id
// @desc        Update contact
// @access      Private
router.put('/:id', (req, res) => {
  res.send('Update contact')
})

// @router      DELETE api/contacts/:id
// @desc        Delete contact
// @access      Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact')
})

module.exports = router;
