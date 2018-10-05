import express from 'express';
import http from 'http';
import io from 'socket.io';

const app = express();
const server = new http.Server(app);
const sio = io(server);


sio.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on 3000');
});
