const express = require('express');
const list = require('./list');
const get = require('./get');

const router = express.Router({ mergeParams: true });

router.get('/', list);
router.get('/:id', get);

module.exports = router;
