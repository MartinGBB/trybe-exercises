const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', (_req, res) => {
  res.send('Está vivo!!!')
})

app.listen(PORT, () => console.log(`ouvindo na porta ${PORT}`))
