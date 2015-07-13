var http = require('http'),
    url = require('url'),
    Static = require('node-static'),
    WebSocketServer = new require('ws');

var clients = {};

function start (route, handle) {
    function onRequest (request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received');
        
        route(handle, pathname, response, request);
    }
    
    http.createServer(onRequest).listen(8888);
    console.log('Server has started');
}

var webSocketServer = new WebSocketServer.Server({port: 8889});
    webSocketServer.on('connection', function(ws) {
    
    var id = Math.random();
    clients[id] = ws;
        
    ws.on('message', function(data) {
        for(var key in clients) {
            clients[key].send(data);
        }
    });

    ws.on('close', function() {
        delete clients[id];
    });
});

exports.start = start;