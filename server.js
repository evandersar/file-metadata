var express = require('express');
var multer  = require('multer');
var path = require('path');

var upload = multer({ dest: 'uploads/' });
var app = express();

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname,'/client/index.html'));
});

app.post('/get-file-size', upload.single('userFile'), function (req, res, next) {
  // req.file is the `userFile` file
  // req.body will hold the text fields, if there were any
  var fSize = req.file ? req.file.size : 'undefined';
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({size: fSize}));
});

app.listen(8080, function () {
  console.log('App listening on port 8080!');
});