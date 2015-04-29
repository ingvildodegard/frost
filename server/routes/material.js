var express = require('express');
var router = express.Router();

router.get('/all', function (req, res) {
    var db = req.db;
    console.log("get/all");
    db.collection('material').find().toArray(function(err, result){
        console.log(result);
       res.json(result);
    });
});

router.post('/addmaterial', function(req, res, next) {
   var db = req.db;
   console.log("addmaterial" + req.body.name);
    db.collection('material').insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

router.get('/search', function (req, res) {
    var db = req.db;
    console.log("/api/search " + req.query.searchstring);
    db.collection('material').find( /*{ /*$text: { $search: "Tann"/*req.query.searchstring } }*/ ).toArray(function(err, result){
        var matchList = [];
        result.forEach(function(material){
            if (contains(material.description, req.query.searchstring) ||
            contains(material.name, req.query.searchstring)){
                matchList.push(material);
                console.log(material);
            }
        });
       res.json(matchList);
    });
});

function contains(text, searchString){
    if (searchString == null || text == null){
        return false;
    }
    if (text.toUpperCase().indexOf(searchString.toUpperCase()) > -1){
        return true;
    }
    return false;
}

module.exports = router;
