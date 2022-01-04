const express = require('express');
const list = require('./list');
const get = require('./get');
const create = require('./create');
const remove = require('./remove');
const update = require('./update');

const router = express.Router({ mergeParams: true });

router.get('/', list);
router.get('/:id', get);
router.post('/', create);
router.delete('/:id', remove);
router.post('/:id', update);


module.exports = router;
