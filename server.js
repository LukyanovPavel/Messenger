const express = require('express')
const socketEnable = require('socket.io')

const app = express()
const server = require('http').Server(app)

const io = socketEnable(server)

const rooms = new Map()

app.get('/rooms', (req, res) => {
    res.json(rooms)
})

io.on('connection', socket => {
    console.log('user connected', socket)
})

server.listen(9000, err => {
    if (err) {
        throw Error(err)
    }
    console.log('Server is start!')
})