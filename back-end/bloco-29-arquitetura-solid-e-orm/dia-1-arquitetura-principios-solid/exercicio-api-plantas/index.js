const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get('/', (_req, res) => (res.status(200).json({ message: 'funcionando'})))

app.listen(PORT, () => console.log(`Usando porta ${PORT}`));