var express = require('express');
var router = express.Router();

var driver = require('../public/javascripts/neo4j').driver;
var session = require('../public/javascripts/neo4j').session;

router.get('/', function(req, res, next) {
    // session
    //     .run('MATCH (n:room) RETURN n')
    //     .then(function (result) {
    //         var dataRoom = [];
    //         result.records.forEach(function (record) {
    //             dataRoom.push(record._fields[0].properties);
    //         })
    //         res.render('index', {data: dataRoom})
    //     })
    //     .catch(function (err) {
    //         console.log(err);
    //     })
   //res.send('public/map.json');
   res.render('index');
});

module.exports = router;
