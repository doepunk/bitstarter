var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var indexBuf = fs.readFileSync('index.html');
//  var indexBuf = fs.readFileSync('bitstarter-hw4.html');
  response.send(indexBuf.toString('utf-8'));
//  response.send('Hello World!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
