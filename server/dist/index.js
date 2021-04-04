"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var socket_io_1 = __importDefault(require("socket.io"));
var PORT = process.env.PORT || 4000;
var app = express_1.default();
var server = http_1.default.createServer(app);
var io = new socket_io_1.default.Server(server, {
    cors: {
        origin: '*',
    }
});
var users = [];
io.on('connection', function (socket) {
    console.log(users.map(function (user) { return ({ id: user.id, name: user.name, socket: user.socket.id }); }));
    socket.on('message', function (data) {
        var message = JSON.parse(data);
        console.log(message.user.name + " : " + message.message);
        socket.broadcast.emit('message', data);
    });
    socket.on('join', function (data) {
        var user = JSON.parse(data);
        user.socket = socket;
        users.push(user);
    });
    socket.on('disconnect', function () {
        var userIndex = users.findIndex(function (user) { return user.socket.id === socket.id; });
        if (userIndex === -1)
            return;
        console.log("removed : " + users[userIndex].name);
        socket.broadcast.emit('offline', (users[userIndex].id));
        users.splice(userIndex, 1);
    });
});
server.listen(PORT, function () {
    console.log("Server running on port " + PORT);
});
