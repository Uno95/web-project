var qr = require('qr-image');  
var express = require('express');

var app = express();

app.get('/', function(req, res) {  
  var code = qr.image('https://www.youtube.com/watch?v=RXgY8o74t2w', { type: 'png' });
  res.type('png');
  code.pipe(res);
});

app.listen(3000); 