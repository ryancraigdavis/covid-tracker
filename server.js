var express = require('express');
var http = require('http'); // Because I am not using a template engine - to serve static html files
var app = express();
var bodyParser = require('body-parser');

var formSubmits = []

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res){
    var path = 'index.html';
    res.sendFile(path, {root: './public'});
});

app.post('/', function(req, res){
    // This simply pushes the form submission into an array
    // Typically this would be saving to a database instead
    formSubmits.push(req.body)

	res.send('Success');
});

app.get('/about', function(req, res){
    var path = 'about.html';
    res.sendFile(path, {root: './public'});
});

app.get('/world', function(req, res){
    var path = 'world.html';
    res.sendFile(path, {root: './public'});
});

app.get('/us', function(req, res){
    var path = 'us.html';
    res.sendFile(path, {root: './public'});
});

console.log('Express started on http://flip2.engr.oregonstate.edu:1337; press Ctrl-C to terminate.');
http.createServer(app).listen(1337);
