
//const WebSocket = require('ws');
//const url = require('url');
/*
const wss = new WebSocket.Server({ noServer: true });
wss.on('connection', function connection(ws) {
    wss.on('message', function message(msg) {
alert();
    });
});
const server = http.createServer(function(req, res) {
    wss.emit('connection', wss);

});
/*

  */


  //server.listen(8080);
  //const wss = new WebSocket.Server({ port: 8080 });
/*
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});*/
import WebSocket from 'ws';
/*
const server = http.createServer();
const wss = new WebSocket.Server({ server });


  
server.on('connect', function upgrade(request, socket, head) {
  // This function is not defined on purpose. Implement it with your own logic.

      wss.emit('connection',wss);
    
  });



wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});
server.listen(8001);

*/
/*
const ws = new WebSocket.Server({ port: 8001 });

ws.on('open', function open() {
  //ws.send(Date.now());
 
});

ws.on('close', function close() {
  console.log('disconnected');
});

ws.on('hello', function incoming(data) {
    console.log(data)
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send("merhaba");
        //client.send(data);
      }
    });
  });

ws.on('error', function incoming(data) {
 
    console.log(data)
     
    });
    
*//*
const server = http.createServer();
const wss1 = new WebSocket.Server({ server });

wss1.on('connection', function connection(ws) {
 setTimeout(function timeout() {
        wss1.send("hello","merhaba");
    }, 500);
   setInterval(function ping() {
    ws.emit("hello","merhaba");

      }, 5000);
});



server.on('upgrade', function upgrade(request, socket, head) {
  //const pathname = url.parse(request.url).pathname;

    wss1.handleUpgrade(request, socket, head, function done(ws) {
      wss1.emit('connection', ws, request);
    });

});

server.listen(8001);
*/

//const http = require('http');
/*
import  crypto from 'crypto';
import http from 'http';

import  stat from 'node-static';
const file = new stat.Server('./');
const server = http.createServer((req, res) => {
  req.addListener('end', () => file.serve(req, res)).resume();
});
server.on('upgrade', function (req, socket) {
  if (req.headers['upgrade'] !== 'websocket') {
    socket.end('HTTP/1.1 400 Bad Request');
    return;
  }
  // Read the websocket key provided by the client: 
  const acceptKey = req.headers['sec-websocket-key']; 
  // Generate the response value to use in the response: 
  const hash = generateAcceptValue(acceptKey); 
  // Write the HTTP response into an array of response lines: 
  const responseHeaders = [ 'HTTP/1.1 101 Web Socket Protocol Handshake', 'Upgrade: WebSocket', 'Connection: Upgrade', `Sec-WebSocket-Accept: ${hash}` ]; 
  // Write the response back to the client socket, being sure to append two 
  // additional newlines so that the browser recognises the end of the response 
  // header and doesn't continue to wait for more header data: 
  socket.write(responseHeaders.join('\r\n') + '\r\n\r\n');
});
 // Don't forget the hashing function described earlier:
function generateAcceptValue (acceptKey) {
  return crypto
  .createHash('sha1')
  .update(acceptKey + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11', 'binary')
  .digest('base64');
}*/
import require from 'requirejs';
const http = require("http");

//import http from 'http';


const server = http.createServer((request, res,next) => {
  response.end("...");
     // res.header('Access-Control-Allow-Origin', '*');
    //res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept-Type');
    //res.header('Access-Control-Allow-Credentials', 'true');
    //next();

});
const socket = require('socket.io')(server, {
  path: '',
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});
//var socket = new require("socket.io")(server);

//1234 portuna gelecek olan tüm istekleri socket tarafından dinlememiz gerekmektedir.

//const io = socket.listen(server);
socket.sockets.on("connection", socket => {
    //Server'a bir client bağlandığı zaman "connection" isimli olay tetiklenecektir. socket parametresi ise bağlantı yapan client'ın bilgisini içermektedir.
    console.log("User connection", socket.client.id);
    socket.on("sendMessageToClient", () => {

    }); 
    socket.on("sendMessageToServer", () => {
        console.log("sendMessageToServer tetiklendi.");
        socket.broadcast.emit("sendMessageToClient", "merhaba socket io");

   });
  
  
});


socket.on('connect_failed', function(){
  console.log('Connection Failed');
});
server.listen(8001);
