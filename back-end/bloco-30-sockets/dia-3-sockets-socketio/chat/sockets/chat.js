module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('clientMessage', (message) => {
      io.emit('serverMessage', message)
    });
  });
};
