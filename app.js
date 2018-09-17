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

/*

  Teste feedBack

*/

 
app.get('/feedbacks', (req, res) => {
  //console.log(req.params);
  db.collection('feedbacks').find().toArray((err, result) => {
    if (err) return console.log(err);
    res.send(result);
  });
});

app.get('/feedbacks/:cpf', (req, res) => {
  //console.log(req.params);
  db.collection('feedbacks').find(req.params).toArray((err, result) => {
    if (err) return console.log(err);
    res.send(result);
  });
});

app.post('/feedbacks', (req, res) => {
 
 var collection = db.collection('feedbacks');
 var feedback = { cpf: req.body.cpf,  nota: req.body.nota };

 collection.insertOne(feedback, function(err, result) {
   if(err) { throw err; }
   db.close();   
  });
  res.status(201).json({result: "Registro inserido!"})
  /*
  var myobj = [{ cpf: req.body.cpf, nota: req.body.nota }];
  db.collection("feedbacks").insertMany(myobj, function(err, res) {
    if (err) throw err;
    res.send("Document inserted");
  });
  */
});

/*
var feedback = require('./script/feedback.js');
app.post('/feedback', feedback.post);

app.post('/feedback',(req, res) => { 

  var feedbacks = [];
  var data = [];


  data['_id'] = new mongoose.Types.ObjectId();
  data['cpf'] = req.body.cpf;
  data['nota'] = req.body.nota;    

  feedbacks.push(data);

  Feedback.create(feedbacks, function(err, documents) {
    if (err) throw err;
  });
 
  res.status(201).json({result: "Done!"})
 });
*/
  module.exports = app;
