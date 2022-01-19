const socket = window.io();

const form = document.querySelector('form');
const ul = document.querySelector('#messages');
const input = document.querySelector('#messageInput');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  socket.emit('clientMessage', input.value);
  input.value = '';
  return false;
});
