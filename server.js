//
// # SimpleServer
//
var http = require('http');
var path = require('path');

var express = require('express');

//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'client')));

var mongoose = require('mongoose');
mongoose.connect('mongodb://' + process.env.IP + '/users', function (error) {
    if (error) {
        console.log(error);
    }else{
      console.log("Database connected");
    }
});

// Mongoose Schema definition
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    phone: String,
    first_name: String,
    last_name: String,
    email: String,
    address: String
});

// Mongoose Model definition
var User = mongoose.model('users', UserSchema);

router.get('/db', function (req, res) {
    User.find({}, function (err, docs) {
        console.log(docs + " - > docs");
        res.json(docs);
    });
});


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
  
  
  