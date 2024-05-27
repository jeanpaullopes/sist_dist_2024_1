var express = require('express');
var logger = require('morgan');
const WebSocket = require('ws');

const ws = require('ws');
const wsServer = new ws.Server({ noServer: true });
wsServer.on('connection', socket => {
    socket.on('message', (message) => {
        const obj = JSON.parse(message.toString());
        console.log('mensagem:',obj.nome, obj.action);
        
        if (obj.action == 'entrar') {
            console.log('entrou');
            //socket.send(obj.nome + ' entrou na sala');
            sendAll(obj.nome + ' entrou na sala');
        }
        if (obj.action == 'mensagem') {
            //socket.send(`${obj.nome} disse: ${obj.mensagem}`);
            sendAll(`${obj.nome} disse: ${obj.mensagem}`);
        }


    });
    socket.on('close', (socket) => {
        console.log('close');
      });
      socket.on('error', (socket) => {
        console.log('error');
      });
    
  });

  function sendAll(message) {
    wsServer.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    });
}
module.exports = wsServer;