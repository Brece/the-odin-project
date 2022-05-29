const fs = require('fs');
const http = require('http');
const path = require('path');

// create server
const server = http.createServer((req, res) => {
    // dynamic file path
    let filePath = path.join(
        __dirname,
        'pages',
        req.url === '/' ? 'index.html' : req.url
    );

    // initial content type
    let contenType = 'text/html';

    // file extension if present in url request
    let extensionName = path.extname(filePath);

    // check extension and set content type
    switch (extensionName) {
        case '.js':
            contenType = 'text/javascript';
            break;
        case '.css':
            contenType = 'text/css';
            break;
        case '.json':
            contenType = 'application/json';
            break;
        case '.png':
            contenType = 'image/png';
            break;
        case '.jpg':
            contenType = 'image/jpg';
            break;
    };

    // read file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // not such file in the directory (file not found)
                fs.readFile(path.join(__dirname, 'pages', '404.html'), (err, data) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data, 'utf-8');
                });
            } else {
                // some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // success
            fs.readFile(filePath, (err, data) => {
                res.writeHead(200, { 'Content-Type': contenType });
                res.end(data);
            });
        };
    });
});

server.listen(8080);
