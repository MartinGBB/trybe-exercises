const socket = window.io();

const button = document.querySelector('#event-ping');
button.addEventListener('click', (e) => {
  socket.emit('ping');
  return false;
});

const createMessage = (message) => {
  const ul = document.querySelector('#message');
  const li = document.createElement('li');
  li.innerText = message;
  ul.appendChild(li);
};

socket.on('ola', (message) => createMessage(message));
socket.on('pong', (message) => createMessage(message));
