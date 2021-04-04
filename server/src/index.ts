import express from 'express';
import http from 'http';
import { Socket } from 'node:dgram';
import socketio from 'socket.io';
import { UserInterface } from './type';


const PORT = process.env.PORT || 4000;

const app = express();
const server = http.createServer(app);
const io = new socketio.Server(server, {
    cors: {
        origin: '*',
    }
});

const users: UserInterface[] = [];

io.on('connection', (socket) => {
    console.log(users.map(user => ({id: user.id, name: user.name, socket: user.socket.id})));

    socket.on('message', (data) => {
        const message = JSON.parse(data);
        console.log(`${message.user.name} : ${message.message}`)
        socket.broadcast.emit('message', data);
    })

    socket.on('join', (data) => {
        const user = JSON.parse(data) as unknown as UserInterface;
        user.socket = socket;
        users.push(user);
    })

    socket.on('disconnect', () => {
        const userIndex = users.findIndex(user => user.socket.id === socket.id);
        if (userIndex === -1) return;
        console.log(`removed : ${users[userIndex].name}`);
        socket.broadcast.emit('offline', (users[userIndex].id));
        users.splice(userIndex, 1);
    })
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})