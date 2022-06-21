const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 8080;

// middleware for custom favicon
const favicon = require('serve-favicon');
app.use(favicon(path.join(
    __dirname,
    'favicon.ico'
    )));

// routes
let basePath = path.join(
    __dirname,
    'pages'
);

app.get('/', (req, res) => {
    res.sendFile(basePath + '/' + 'index.html');
});

app.get('/:name', (req, res) => {
    let filepath = basePath + '/' + `${req.params.name}.html`;

    /*
    // error handling with node
    fs.readFile(filepath, (err, data) => {
        // file does not exist
        if (err) {
            if (err.code === 'ENOENT') {
                res.sendFile(basePath + '/' + '404.html');
            } else {
                res.send(`Server Error: ${err.code}`);
            }
        } else {
            // success
            res.end(data);
            // res.sendFile(filepath);
        }
    })
    */
    
    res.sendFile(filepath);
});

// error handling with express
app.use((err, req, res, next) => {
    res.status(404).sendFile(basePath + '/' + '404.html')
});

app.listen(port);
