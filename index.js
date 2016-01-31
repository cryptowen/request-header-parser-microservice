require('dotenv').config();
var express = require("express");
var app = express();

app.get('/api/whoami/', function(req, res) {
  console.log(req.headers);
  var res_json = {
    language: req.headers['accept-language'].split(',')[0],
    ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    software: req.headers['user-agent']
  };
  res.json(res_json);
});

app.listen(process.env.PORT, function(){
  console.log('Server start, listen on ' + process.env
  .IP + ':' + process.env.PORT);
});
