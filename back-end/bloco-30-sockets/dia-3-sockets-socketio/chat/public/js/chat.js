const socket = window.io();

const form = document.querySelector('form');
const ul = document.querySelector('#messages');
const messageInput = document.querySelector('#messageInput');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  socket.emit('clientMessage', messageInput.value);
  messageInput.value = '';
  return false;
});

const createMessage = (message) => {
  const li = document.createElement('li');
  li.innerText = message;
  ul.appendChild(li);
};

socket.on('serverMessage', (message) => createMessage(message));
