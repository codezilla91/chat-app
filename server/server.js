const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user joined the chat!');

    server.emit('newEmail', {
        from: 'leon@gmail.com',
        text: 'Ola Leon',
        createdAt: 123
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected!');
    });
});

server.listen(port, () => {
    console.log(`Server running on ${port}`);
});

