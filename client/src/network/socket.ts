import socket from 'socket.io-client';

export const io = socket('http://localhost:8080');
