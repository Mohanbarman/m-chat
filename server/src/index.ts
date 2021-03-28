import http from 'http';
import WebSocket from 'ws';
import express from 'express';


const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (socket) => {
    socket.on('message', (data) => {
        console.log(`Received ${data}`);
    });

    socket.send("Welcome to localhost");
})

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})