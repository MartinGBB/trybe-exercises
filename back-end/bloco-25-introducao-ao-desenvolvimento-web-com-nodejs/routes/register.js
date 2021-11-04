const express = require('express');
const {
  validateName,
  validateEmail,
  validatePassword,
} = require('../middkewares/validate-register');

const register = express.Router();

register.post('/register', 
validateName,
validateEmail,
validatePassword,
(_req, res) => res.status(200).json({ message: 'user created' }),
);

module.exports = register;
