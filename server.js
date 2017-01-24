var express = require('express');
var app = express();
var http = require('http').Server(app);

var port = process.env.PORT || 3000;

app.set('port', port);
app.use(express.static('public'));

http.listen(port, function() {
  console.log('listening on *:' + port);
})
