const express = require('express');
const PORT = process.env.PORT || 3001;
const MESSAGE = process.env.MESSAGE || 'esta vivo!!'

const app = express();

app.get('/', (_req, res) => {
  res.status(200).send(MESSAGE);
});

app.listen(PORT, () => console.log(`ouvindo na porta ${PORT}`))
