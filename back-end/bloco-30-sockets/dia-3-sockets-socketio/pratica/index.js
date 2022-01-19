const express = require('express');
const app = express();
const PORT = 3000;
const http = require('http').createServer(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  }});

  io.on('connection', (socket) => {
    console.log(`id do usuario: ${socket.id}`)
    
      socket.on('ping', () => {
        console.log(`${socket.id} emitiu um ping`);
      });
  });

http.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});
