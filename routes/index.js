const express = require('express');
const router = express.Router();

// router.use('/', require('Hello Maria Martinez'))
// router.use('/helaman', require('Hello Helaman'))

router.use('/contacts', require('./contacts'))

module.exports = router;