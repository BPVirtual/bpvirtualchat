'use strict';

var express = require('express');
var fileUpload = require('express-fileupload');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
 
//var server = require('http').Server(app);

var app = express();
//oi
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.use(fileUpload());
 
//server.listen(3001);
 
mongoose.connect('mongodb://bpvirtualchat:BP2018Virtualchat@ds163410.mlab.com:63410/bpvirtualchat');
 
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
 
var template = require('./script/template.js');
app.get('/template', template.get);
 
var upload = require('./script/upload.js');
app.post('/', upload.post);


mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

app.get('/proponentes/:cpf', (req, res) => {
    //console.log(req.params);
    db.collection('proponentes').find(req.params).toArray((err, result) => {
      if (err) return console.log(err);
      res.send(result);
    });
});

app.get('/proponentes', (req, res) => {
    //console.log(req.params);
    db.collection('proponentes').find().toArray((err, result) => {
      if (err) return console.log(err);
      res.send(result);
    });
});

  module.exports = app;
