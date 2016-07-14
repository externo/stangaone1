var ip = 'localhost';
var port = 2995;

var busboy = require('busboy');
var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var Grid = require('gridfs-stream');
var app = express();

var fs = require('fs');
var http = require('http');
var httpServer = http.createServer(app);

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept, Key, filename, Metadata, header");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Origin", 'http://stangaone1.kataraga.com');
  //res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var connectionUrl = 'mongodb://127.0.0.1:27017/stangaone1';

// Initialize connection once
MongoClient.connect(connectionUrl, function (err, database) {

  if (err) throw err; // TODO: listen for drop

  var db = database;
  var gfs = Grid(db, mongo);

  // routes
  require('./routes/client')(app, mongo, db);
  require('./routes/file')(app, mongo, gfs, busboy);
  require('./routes/profile')(app, mongo, db);

});

//Server
httpServer.listen(port, ip);