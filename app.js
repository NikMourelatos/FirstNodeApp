var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
    socket.on('user connect', (name) => {
        io.emit('user connect', name);
    });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});