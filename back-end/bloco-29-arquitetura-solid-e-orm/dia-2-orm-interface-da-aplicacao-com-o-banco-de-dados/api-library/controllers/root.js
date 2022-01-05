const express = require("express");
const Books = require("./books/router"); 

const root = express.Router({ mergeParams: true });

root.use('/books', Books);

module.exports = root;
