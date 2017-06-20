var 	https 		= require('https');
var 	fs 		= require('fs');
var 	path 		= require('path');
var 	http        	= require('http'),
	express     	= require('express'),
	bodyparser 	= require("body-parser"),
	cookieParser 	= require('cookie-parser'),
	MongoClient    	= require('mongodb').MongoClient,
	Server          = require('mongodb').Server,
	UserSchemaInit  = require('./db/UserSchemaInit').UserSchemaInit,
	UserSchemaOps  	= require('./db/UserSchemaOps.js').UserSchemaOps;
	Mymiddleware		= require('./mymiddleware.js').Mymiddleware;

var app 	= express();
exports.app	= app;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
MongoClient.connect("mongodb://localhost:27017/BeProdigy",function(err, db) {
		if (err) throw err;
		console.log(" Created!");
		db.close();
		});
ops = new UserSchemaOps();
mmw = new Mymiddleware();
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json({ type: 'application/json' }));

console.log("Operation ");

//Jobs
app.get('/CreateJob',mmw.Jobaddmiddle, mmw.Send_Reply);
app.get('/UpdateJob', mmw.Jobupdatemiddle,mmw.Send_Reply);
app.get('/Jobs', mmw.Jobshowallmiddle,mmw.Send_Reply);
app.get('/Job', mmw.Jobshowmiddle,mmw.Send_Reply);
app.get('/JobCount', mmw.Jobcntmiddle,mmw.Send_Reply);


//profile
app.get('/CreateProfile', mmw.usraddmiddle,mmw.Send_Reply);
app.get('/UpdateProfile',mmw.usrupdatemiddle, mmw.Send_Reply);
app.get('/Profiles',mmw.usrshowallmiddle,mmw.Send_Reply);
app.get('/Profile',mmw.usrshowmiddle,mmw.Send_Reply);
app.get('/ProfileCount',mmw.usrcntmiddle,mmw.Send_Reply);


//compnay


app.get('/RegisterCompany',mmw.cmpnyaddmiddle, mmw.Send_Reply);
app.get('/UpdateCompanyProfile',mmw.cmpnyupdatemiddle, mmw.Send_Reply);
app.get('/CompanyProfiles',mmw.cmpnyshowallmiddle,mmw.Send_Reply);
app.get('/CompanyProfile',mmw.cmpnyshowmiddle,mmw.Send_Reply);
app.get('/CompanyCount',mmw.cmpnycntmiddle,mmw.Send_Reply);





http.createServer(app).listen(8080, function(){
		console.log('Express server listening on port ');
		});
