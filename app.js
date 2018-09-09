'use strict';

var express = require('express');
var fileUpload = require('express-fileupload');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
 
//var server = require('http').Server(app);

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.use(fileUpload());
 
//server.listen(3001);
 
mongoose.connect('mongodb://bpvirtualchat:BP2018Virtualchat@ds163410.mlab.com:63410/bpvirtualchat');
 
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
 
var template = require('./template.js');
app.get('/template', template.get);
 
var upload = require('./upload.js');
app.post('/', upload.post);




/*
app.get('/nome', (req, res) => {

    var Authors = mongoose.model('authors', yourSchema);

    // find all athletes who play tennis, selecting the 'name' and 'age' fields
    Authors.find({ 'name': 'Tennis' }, function (err, authors) {
    if (err) return handleError(err);
    // 'athletes' contains the list of athletes that match the criteria.
    res.send(authors);
    });
});
*/


mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

/*
app.get('/nome', (req, res) => {

    db.collection('authors').find(

        //req.params,

        {'name': {'cpf': '22515918859'}},
        function(err, result){

            if(err) return console.log(err);
            res.send(result);
        }
    );
});
*/

app.get('/nomes/:cpf', (req, res) => {
    //console.log(req.params);
    db.collection('authors').find(req.params).toArray((err, result) => {
      if (err) return console.log(err);
      res.send(result);
    });
  });


  module.exports = app;