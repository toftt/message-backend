import express from 'express';
import http from 'http';
import io from 'socket.io';

const app = express();
const server = new http.Server(app);
const sio = io(server);


sio.on('connection', (socket) => {
  console.log(`user with id ${socket.id} connected`);
  socket.on('disconnect', () => {
    console.log(`user with id ${socket.id} disconnected`);
  });
});

server.listen(5000, () => {
  console.log('listening on 5000');
});
