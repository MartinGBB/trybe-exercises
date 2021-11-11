const express = require('express');
const app = express();
const port = 3000;
const author = require('./models/author');

app.get('/authors', async (req, res) => {
  try {
    const authors = await author.getAll();
    res.status(200).json(authors);
  }
  catch(e){
    console.log(e)
  }
})

app.listen(port, () => console.log("port 3000"));
