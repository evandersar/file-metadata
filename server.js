var express = require('express');
var multer  = require('multer');
var path = require('path');

var upload = multer({ dest: 'uploads/' });
var app = express();

app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname,'/client/index.html'));
});

app.post('/get-file-size', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  
});

app.listen(8080, function () {
  console.log('App listening on port 8080!');
});