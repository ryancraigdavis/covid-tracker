var express = require('express');
var http = require('http'); // Because I am not using a template engine - to serve static html files
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.set('port', 3000);

// app.get('/',function(req,res){


// });

app.get('/', function(req, res){
    var path = 'index.html';
    res.sendFile(path, {root: './public'});
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

// app.post('/', function(req,res){

// 	// Creates the object to be passed to the handlebars file
// 	var requestObject = {};
// 	var getCheck = req.query

// 	// Type refers to whether this is a GET or POST request
// 	requestObject.type = 'POST'

// 	// Code adapted from the lecture, creates an array, then
// 	// pushes each entry in the query with the key as the head
// 	// and the value as the value - this is used for data passed
// 	// in the URL
// 	var param = [];
// 	for (var p in req.query){
// 		// This attaches the caption for the 'Query Table' to the table
// 		requestObject.getTable = 'Query Table'
// 		param.push({'head':p,'value':req.query[p]})
// 	}
	
// 	// Get list is used with the #each command in the handlebars
// 	// file to pass each of the parameters
// 	requestObject.getList = param;

// 	// Code adapted from the lecture, creates an array, then
// 	// for each parameter in the body, pushes each entry with key 
// 	// as the headPost and the value as the valuePost - 
// 	// this is used for data passed in the body, stringifies the
// 	// value in case objects are passed as a part of the JSON body
// 	var paramPost = [];
// 	for (var p in req.body){
// 		// This attaches the caption for the 'Body Table' to the table
// 		requestObject.postTable = 'Body Table'
// 		paramPost.push({'headPost':p,'valuePost':JSON.stringify(req.body[p])})
// 	}

// 	// Post list is used with the #each command in the handlebars
// 	// file to pass each of the parameters
// 	requestObject.postList = paramPost;

// 	// Renders the index handlebar file
// 	res.render('index', requestObject);
// });

console.log('Express started on http://flip2.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
http.createServer(app).listen(3000);
