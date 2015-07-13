var path = require('path');

function route (handle, pathname, response, request) {    
    console.log('Request to ' + pathname);
    
    var filePath = request.url,
        extName = path.extname(filePath),
        type = '';
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response);
    } else {
        switch (extName) {
            case '.js':
                type = 'text/javascript';
                return handle['fileResponse'](response, type, filePath);
                break;
            case '.css': 
                return handle['styleResponse'](response, filePath);
                break;
            default: 
                console.log("No request handler found for " + pathname);
                response.writeHead(404, {"Content-Type": "text/plain"});
                response.write("404 Not found");
                response.end();   
        }
    } 
}

exports.route = route;