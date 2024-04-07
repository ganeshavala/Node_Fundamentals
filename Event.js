const { Socket } = require('node:dgram');
const EventEmitter = require('node:events');
const net = require("node:net");

let server = new net.Server();
console.log(server instanceof EventEmitter);

server.on("connection",Socket=>{
    Socket.end("Hello Wolrd","utf-8");
})

server.emit("connection");