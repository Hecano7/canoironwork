var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();
var path = require('path');
const morgan = require("morgan");
var fs = require('fs');
const bodyParser = require("body-parser");
const mailer = require("./Public/mailer");
const upload = require("express-fileupload");

app.use(upload())
// app.use(express.static('Public')

app.use(express.static(__dirname + "/Public/"));
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))



// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'Public/index.html'));
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
app.get('/sitemap', function(req, res) {
    res.sendFile(path.join(__dirname + '/sitemap.xml'));
});
app.post('/', (req, res) => {
    var files;
    var filePath;
    if(req.files){
        files = req.files.photo;
        // console.log(files);
        // var filename = files.name;
        // filePath = __dirname+"/"+filename;
        // file.mv(__dirname+"/"+filename,function(err){
        //     if(err){
        //         console.log(err);
        //         res.send("error occured")
        //     }
        // })
    }
         mailer(req,files);
         setTimeout(() => {
            if(req.files){
                try {
                    fs.unlinkSync(filePath)
                    //file removed
                } catch(err) {
                    console.error(err)
                }
          }
        }, 4000);

    res.sendFile('index.html', {root: __dirname });
});

app.listen(PORT);