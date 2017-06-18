var http = require('http');
var    express = require('express');
var    path = require('path');

UserSchemaInit = function()
{
	this.mongoose = require('mongoose');
console.log("Connecting to mongodb");
	this.mongoose.connect("mongodb://localhost:27017/BeProdigy");


	var UserColSchema = new this.mongoose.Schema({
				Name	: String,
				JobType		: String,
				Current_employer		: String,
				Experince		: Number,
				Current_CTC		: Number,
				Skills		: String,
				Highest_Q		: String,
				Current_Work_Location		: String,
				Resume		: [String],
				Expected_CTC		:  Number,//
				Member_Since		: Date,
				Last_Update		: Date,
				});


	var JobColSchema = new this.mongoose.Schema({
				Title						: String,
				Type						: String,
				Industry				: String,
				Org							: String,
				Specialization	: String,
				Qualification		: String,
				JobDesc					: [String],
				Vacancies				:  Number,
				PostedOn				: Date
});

var CompanyColSchema = new this.mongoose.Schema({
			Title						: String,
			Type						: String,
			Openings				: String,
			HeadQuater			: String,
			Link						: String
});

var UserCol = this.mongoose.model('UserCol', UserColSchema);
this.UserCol = UserCol;
var JobCol = this.mongoose.model('JobCol', JobColSchema);
this.JobCol = JobCol;
var CompanyCol = this.mongoose.model('CompanyCol', CompanyColSchema);
this.CompanyCol = CompanyCol;
console.log(" User Schema is initialized ");
};


UserSchemaInit.prototype.getMongoose = function(){
	return this.mongoose;
};

exports.UserSchemaInit = UserSchemaInit;
