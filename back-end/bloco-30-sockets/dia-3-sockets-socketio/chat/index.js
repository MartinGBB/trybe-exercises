const express = require('express');
const app = express();
const PORT = 3000;
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST'],
  },
});

app.use(express.static(__dirname + '/public'));

require('./sockets/chat')(io);


http.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
