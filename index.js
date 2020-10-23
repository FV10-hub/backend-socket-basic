const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();

const publicPath = path.resolve(__dirname, 'public');

const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/sockets');

app.use( express.static(publicPath));

server.listen(process.env.PORT, err => {
    if (err) {
        throw new Error('Ocurrio un error');   
    }
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
});