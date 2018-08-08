//this file is setting up the express webservr

var express = require('express'),
    path = require('path'),
    open = require('open');

var port = 3000;
var app = express();

app.get('/', function (req, res) {
  //__dirname is a special variable which gets the current directory path
  res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
  else {
    open('http://localhost:' + port);
  };
});
