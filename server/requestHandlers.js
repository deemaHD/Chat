var fs = require('fs');

function index (response) {
    console.log("Request handler 'index' was called.");
    
    fs.readFile("./client/index.html", function(error, file) {
        if (error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(file);
            response.end();
        }
    });
}

function fileResponse (response, type, filePath) {
    console.log("Request handler 'fileResponse' was called.");
    
    fs.readFile('./client' + filePath, function(error, file) {
        if (error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": type});
            response.write(file);
            response.end();
        }
    });
}

function styleResponse (response, filePath) {
    console.log("Request handler 'styleResponse' was called.");

    fs.readFile('./client' + filePath, function(error, file) {
        if (error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": 'text/css'});
            response.write(file);
            response.end();
        }
    });
}

function getStudents (response) {
    console.log("Request handler 'getStudents' was called.");
    
    fs.readFile("./client/students.json", function(error, file) {
        if (error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "application/json"});
            response.write(file);
            response.end();
        }
    });
}

exports.index = index;
exports.getStudents = getStudents;
exports.fileResponse = fileResponse;
exports.styleResponse = styleResponse;