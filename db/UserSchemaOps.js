var mongoose = require('mongoose');
var SchemaPkg = require('./UserSchemaInit').UserSchemaInit;

///   Constructor///


UserSchemaOps = function(){

};
console.log("UserSchemaOps file");
schema =  new UserSchemaInit();


////// USer Ops /////
//Create
UserSchemaOps.prototype.usradd   = function(name,type,curr_emp,exp,cctc,skill,h_q,cwl,resume,ectc)
{
	console.log(" useradd ");
	var userentry =new (schema.UserCol)({
		Name	: name,
		JobType		: type,
		Current_employer		: curr_emp,
		Experince		: exp,
		Current_CTC		: cctc,
		Skills		: skill,
		Highest_Q		: h_q,
		Current_Work_Location		: cwl,
		Resume		: resume,
		Expected_CTC		:  ectc,//
		Member_Since		: 9/9/2017,
		Last_Update		: 9/9/2017
			});
	userentry.save(function(err){
			if(err)
			console.log("user add error: " +err );
			else
			console.log(userentry);
			});


	console.log("User added");
	return "{Result: Added}";


};



////Delete
UserSchemaOps.prototype.usrdel   = function( profileid )
{
	console.log(" userdel ");


	(schema.UserCol).remove({ ProfileID: profileid }, function (err) {
			if (err) return handleError("Result: Error " +err);
			console.log(' removed ');
			return "{Result: Removed}";

			});

};
///Update
UserSchemaOps.prototype.usrupdate= function(profileid,name,type,curr_emp,exp,cctc,skill,h_q,cwl,resume,ectc)
{
	console.log(" userupdate started");

	(schema.UserCol).update({ _id: profileid},{ 	Name	: name,JobType		: type,Current_employer		: curr_emp,Experince		: exp,Current_CTC		: cctc,Skills		: skill,Highest_Q		: h_q,Current_Work_Location		: cwl,Resume		: resume,Expected_CTC		:  ectc,Last_Update		: 11/9/2017, }, function (err, numberAffected, raw) {
			if (err){
				 return handleError(err);
			 }
			else {
				schema.UserCol.find({_id:profileid},function (err, jobid) {
						if (err) return console.error(err);
						console.log(jobid);
						console.log("returning");
						return jobid;
						});
			}
			});


};

///Display
UserSchemaOps.prototype.usrshow  = function(jobid,cb )

{
	console.log(" Usershow ");
	(schema.UserCol).find({_id:jobid},function (err, jobid) {
			if (err) return console.error(err);
			return cb(jobid);
			});

};
UserSchemaOps.prototype.usrshowall  = function(cb)

{

	console.log(" Usershowall ");
	(schema.UserCol).find(function(e, d) {
            console.log(d.length);
						return cb(d);
        });

};
///Stats
UserSchemaOps.prototype.usrcount  = function(cb)

{

	console.log(" jobcount ");
 var result= (schema.UserCol).find(function(e, d) {
					 console.log(d.length);
					 return cb({" count ":d.length});
			 });
};
console.log("Operations User ");



////// Job Ops
//Create
UserSchemaOps.prototype.Jobadd   = function(title,type, indus,org,spec,qual,jobd,vac,poson)
{
	console.log(" Job add ");
	var userentry =new (schema.JobCol)({
		Title						: title,
		Type						: type,
		Industry				: indus,
		Org 						: org,
		Specialization	: spec,
		Qualification		: qual,
		JobDesc					: jobd,
		Vacancies				:  vac,
		PostedOn				: poson
	});
	userentry.save(function(err){
			if(err)
			console.log("Job add error: " +err );
			else
			console.log(userentry);
			});


	console.log("Job added");
	return "{Result: Added}";


};

/////Delete
UserSchemaOps.prototype.Jobdel   = function( jobid )
{
	console.log(" userdel ");


	(schema.JobCol).remove({ _id: jobid }, function (err) {
			if (err) return handleError("Remov Error: " +err);
			console.log(' removed ');

			});
			return "{Result: Removed}";
};
///Update
UserSchemaOps.prototype.Jobupdate= function(jobid,title,type, indus,org, spec,qual,jobd,vac)
{
	console.log(" Jobupdate ");
	(schema.JobCol).update({ _id: jobid},{ Title	: title,Type:type, Industry: indus, Org:org,Specialization	: spec,Qualification: qual,JobDesc: jobd,Vacancies:  vac }, function (err, numberAffected, raw) {
			if (err) return handleError(err);
			return "{Result: Updated}";
			});


};

///Display
UserSchemaOps.prototype.Jobshow  = function(jobid, cb)

{

	console.log(" Jobshow ");
	(schema.JobCol).find({_id:jobid},function (err, jobid) {
			if (err) return console.error(err);
			console.log(jobid)
			return cb(jobid);
			});

};
UserSchemaOps.prototype.Jobshowall  = function(cb)

{

	console.log(" Jobshowall ");
	(schema.JobCol).find(function(e, d) {
            console.log(d.length);
						console.log(d);
						return cb(d);
        });

};

///Stats
UserSchemaOps.prototype.jobcount  = function(cb)

{

	console.log(" jobcount ");
	(schema.JobCol).find(function(e, d) {
						console.log(d.length);
						return cb({" count ":d.length});
				});

};
console.log("Operations Job ");


//Company Ops/////
///Create
UserSchemaOps.prototype.cmpnyadd   = function(name,type,openings,hq,link)
{
	console.log(" Companyadd ");
	var userentry =new (schema.CompanyCol)({
		Title						: name,
		Type						: type,
		Openings				: openings,
		HeadQuater			: hq,
		Link						: link
			});

	userentry.save(function(err){
			if(err)
			console.log("user add error: " +err );
			else
			console.log(userentry);
			});


	console.log("Company added");
	return "{Result: Added}";


};

///Delete
UserSchemaOps.prototype.cmpnydel   = function( profileid )
{
	console.log(" userdel ");
	(schema.CompanyCol).remove({ _id: profileid }, function (err) {
			if (err) return handleError("Remov Error: " +err);
			console.log(' removed ');
			return "{Result: Removed}";
			});

};

///Update
UserSchemaOps.prototype.cmpnyupdate= function(compnayid,name,type,openings,hq,link)
{
	console.log(" userupdate ");

	(schema.CompanyCol).update({ _id: compnayid},{ Title: name,Type: type, Openings: openings,HeadQuater: hq,Link: link }, function (err, numberAffected, raw) {
			if (err) return handleError(err);
			return "{Result: Updated}";
			});


};

///Display
UserSchemaOps.prototype.cmpnyshow  = function(jobid, cb )

{

	console.log(" Usershow ");
	(schema.CompanyCol).find({_id:jobid},function (err, jobid) {
			if (err) return console.error(err);
			console.log(jobid)
			return cb(jobid);
			});

};
UserSchemaOps.prototype.cmpnyshowall  = function(cb)

{

	console.log(" Usershowall ");
	(schema.CompanyCol).find(function(e, d) {
            console.log(d.length);
						return cb(d);
        });

};

///Stats
UserSchemaOps.prototype.cmpnycount  = function(cb)

{
						var result=(schema.CompanyCol).find(function(e, d) {
											console.log(d.length);
											return cb({" count ":d.length});
									});
};
console.log("Operations User ");

exports.UserSchemaOps = UserSchemaOps;
