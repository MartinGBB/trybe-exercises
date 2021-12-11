const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (_, res) => {
  res.status(200).send({ message: 'App funcionando' });
});

app.listen(PORT, () => console.log(`app na porta ${PORT}`));
