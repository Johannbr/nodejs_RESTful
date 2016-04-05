

var request = require('request');

exports.getRandomUser=function(callback){
request('https://randomuser.me/api/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('2. get response from API');
    callback(body);
  }
});
};

exports.addRandomUsers=function(usersNumber, callback){
  request('http://api.randomuser.me/?results='+usersNumber, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(body);
    }
  });
};
