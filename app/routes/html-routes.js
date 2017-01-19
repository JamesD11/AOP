var path = require('path');

//----------------------------------------------------------------------
module.exports = function(app){

		app.get('/', function(req,res){
		  //res.send("Working");
			res.sendFile(path.join(__dirname + '/../public/index.html'));
		});

		app.get('/constitution', function(req,res){
		  //res.send("Working");
			res.sendFile(path.join(__dirname + '/../public/constitution.html'));
		});

		app.get('/rulechange', function(req,res){
		  //res.send("Working");
			res.sendFile(path.join(__dirname + '/../public/rulechange.html'));
		});

};
