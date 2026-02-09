var express = require('express');
var path = require('path');
var app = express();
var routing = require('./routing.js');

// Serve static assets (CSS, images) from the current folder
app.use(express.static(__dirname));

// Route handlers
app.use('/', routing);

// Start server
app.listen(5000);
console.log('server is running on http://localhost:5000');
