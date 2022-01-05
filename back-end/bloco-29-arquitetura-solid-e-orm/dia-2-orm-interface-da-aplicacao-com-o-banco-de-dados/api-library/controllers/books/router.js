const express = require('express');
const list = require('./list');
const get = require('./get');
const create = require('./create');

const router = express.Router({ mergeParams: true });

router.get('/', list);
router.get('/:id', get);
router.post('/', create);

module.exports = router;
