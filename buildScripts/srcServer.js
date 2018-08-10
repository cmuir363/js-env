//this file is setting up the express webservr

import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev.js";

//var express = require('express'), this is the old ES5 style imports
    //path = require('path'),
    //open = require('open');

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config); // setting up the bundler to be used

//telling app to use the compiler and configuring it
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

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
  }
});
