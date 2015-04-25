var express = require('express');
var router = express.Router();

router.get('/deletecustomer/:id', function(req, res) {
    var db = req.db;
    console.log(req.params);
    var customerToDelete = req.params.id;
    db.collection('customer').removeById(customerToDelete, function(err, result) {
        res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });
    });
});

router.get('/all', function (req, res) {
    var db = req.db;
    console.log("get/allllll");
    db.collection('customer').find().toArray(function(err, result){
        console.log(result);
       res.json(result);
    });
});

router.post('/addcustomer', function(req, res, next) {
   var db = req.db;
   console.log("addcustomer" + req.body.user);
    db.collection('customer').insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

module.exports = router;
