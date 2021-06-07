const express = require('express');

const router = express.Router();

const tags = require('../data/tags');

// Get a list of tags
router.get('/', (req, res) => {
  res.json(tags);
});

module.exports = router;
