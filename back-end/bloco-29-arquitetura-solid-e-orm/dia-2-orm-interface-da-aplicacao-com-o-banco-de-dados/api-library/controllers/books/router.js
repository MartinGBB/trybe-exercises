const express = require('express');
const list = require('./list');
const get = require('./get');
const create = require('./create');
const update = require('./update');
const remove = require('./remove');

const router = express.Router({ mergeParams: true });

router.get('/', list);
router.get('/:id', get);
router.post('/', create);
router.post('/:id', update);
router.delete('/:id', remove);

module.exports = router;
