// server.js
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8090 });

server.on('connection', (ws) => {
    console.log('New client connected');

    // 发送一条消息给客户端
    ws.send('Welcome to the WebSocket server!');

    // 监听来自客户端的消息
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        // 回复客户端
        ws.send(`Server received: ${message}`);
    });

    // 处理连接关闭事件
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8090');

