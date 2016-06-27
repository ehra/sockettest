var express = require('express');
var router = express.Router();
var app = require('../app');
//var io = require('socket.io')(app);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', rooms : 'nil' });
  var msg = "HELOO";
  var from = "user";
  res.socket.on('private message', function (from, msg) {
    console.log('I received a private message by ', from, ' saying ', msg);
  })

  res.io.on('connection',function(socket){
	console.log("connection");
  })

});


module.exports = router;
