var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();
var path = require('path');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mailer = require("./Public/mailer");

app.use(express.static('Public'));
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/gallery', function(req, res) {
    res.sendFile(path.join(__dirname + '/Public/gallery.html'));
});
app.get('/driveway', function(req, res) {
    res.sendFile(path.join(__dirname + '/Public/driveway.html'));
});
app.get('/automatic', function(req, res) {
    res.sendFile(path.join(__dirname + '/Public/automatic.html'));
});
app.get('/fencing', function(req, res) {
    res.sendFile(path.join(__dirname + '/Public/fencing.html'));
});
app.post('/submit', (req, res) => {
    console.log(req.body);
mailer(req);
res.sendFile('index.html', {root: __dirname });
});

app.listen(PORT);