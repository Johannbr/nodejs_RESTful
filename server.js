var express = require('express');
var app = express();
var fs = require("fs");
var randomUser = require("./randomUser");

app.get('/listUsers', function(req, res) {
  fs.readFile(__dirname + "/assets/" + "users.json", 'utf8', function(err, data) {
    res.end(data);
  });
});

app.get('/randomUser', function(req, res) {
  console.log('1. app.get(/randomUser)');
  randomUser.getRandomUser(function(body) {
    console.log('3. send response to browser');
    res.type('json');
    res.end(body);
  });
});

app.get('/addRandomUsers/:usersNumber',function(req, res){
randomUser.addRandomUsers(req.params.usersNumber, function(body){
  res.type('json');
  res.end(body);
});
});

app.get('/:id', function(req, res) {
  // First read existing users.
  fs.readFile(__dirname + "/assets/" + "users.json", 'utf8', function(err, data) {
    users = JSON.parse(data);
    var user = users["user" + req.params.id];
    /* console.log( user );*/
    res.type('json');
    res.end(JSON.stringify(user));

  });
});

var server = app.listen(8081, function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);

});
