const express = require('express');
const {
  validateName,
  validateEmail,
  validatePassword,
} = require('../middlewares/validate-register');
const token = require('../middlewares/gerateToken');

const register = express.Router();

register.post('/register', 
validateName,
validateEmail,
validatePassword,
(_req, res) => res.status(200).json({ message: 'user created' }),
);

register.post('/login',
validateEmail,
validatePassword,
token,
(_req, res) => res.status(200).json(token))

module.exports = register;
