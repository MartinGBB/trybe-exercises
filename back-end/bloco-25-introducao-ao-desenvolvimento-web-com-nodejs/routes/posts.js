const express = require('express');
const verificaId = require('../middlewares/verificationId');
const posts = express.Router();

posts.get('/:id', verificaId);

module.exports = posts;
