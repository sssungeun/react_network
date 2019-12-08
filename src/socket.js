import socketio from 'socket.io-client'

const socket = socketio.connect('https://reactsocketiomo.herokuapp.com/')

export default socket