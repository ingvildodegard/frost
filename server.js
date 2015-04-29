//
// # SimpleServer
//
var http = require('http');
var path = require('path');


var express = require('express');
var mongo = require('mongoskin');

var material = require('./server/routes/material.js');

//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'client')));

var bodyParser = require('body-parser');
router.use(bodyParser());

var mongodb = mongo.db('mongodb://' + process.env.IP + '/frost', {native_parser:true});


router.use(function(req,res,next){
    req.db = mongodb;
    next();
});

router.use('/api', material);

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
  console.log("https://frost-ingvild1976.c9.io");
});
  
var queueSocket = "amqp://tutorial:tutorial@mstutorial.cloudapp.net";
var queueName = "Search";
var encoding = "UTF-8";

var context = require("rabbit.js").createContext(queueSocket);
console.log("1 ");
context.on("ready", function(){
  console.log("2 ");
  var sub = context.socket("SUB",  {routing: 'topic'});
  console.log("3 ");
  sub.connect(queueName,'*', function() {
    sub.on("data", function (data){
      console.log("received data %s", data);
      var msgData = JSON.parse(data);
      if( msgData.MessageType=="MaterialAdded"){
        console.log("Success!!");
      }else if(msgData.MessageType=="MaterialQuantityChanged")
      console.log("Update item!!");
  })
  console.log("4 ");
})
});
