var server = require('./server'),
    router = require('./router'),
    requestHandlers = require('./requestHandlers');

var handlers = {
    '/': requestHandlers.index,
    '/getstudents': requestHandlers.getStudents,
    'fileResponse': requestHandlers.fileResponse,
    'styleResponse': requestHandlers.styleResponse
};

server.start(router.route, handlers);