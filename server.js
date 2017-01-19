var express 	= require('express');
var bodyParser 	= require('body-parser');
var path = require('path');



//App
//-------------------------------------
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Routes
//-------------------------------------

require('./app/routes/html-routes.js')(app);




// Server
//-------------------------------------
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
});
