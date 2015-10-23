
var strftime = require('strftime') 
var net = require('net')

var server = net.createServer(function (socket) {
  // socket handling logic
  socket.write(strftime('%F %H:%M'))
  socket.end() 
})
server.listen(Number(process.argv[2]));
