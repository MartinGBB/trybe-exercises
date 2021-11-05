const express = require('express');
const allPosts = require('../middlewares/allPosts');
const verificaId = require('../middlewares/verificationId');
const posts = express.Router();

posts.get('/:id', verificaId);
posts.get('/', allPosts);


module.exports = posts;
