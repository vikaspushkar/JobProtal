var mongoose = require('mongoose');
var  synchronize  = require('synchronize');
var  UserSchemaOps = require('./db/UserSchemaOps.js'). UserSchemaOps;

Mymiddleware = function(){

};
console.log(" Mymiddleware file");
 ops =  new UserSchemaOps();


Mymiddleware.prototype.Send_Reply   = function(req,res,next)
{
  console.log("send reply");
  console.log(req.myresult);
  res.status(200);
  res.send(req.myresult);
  res.end();
  next();
}

/// User Collection /////

 Mymiddleware.prototype.usraddmiddle   = function(req,res,next)
{
ops.usradd("Vikas","IT-Software","Cisco",5,9,"C,C++,Golang,Lua,Shell","Masters from IITG","Banglore","NULL",40);
req.myresult="{Result:Added}";
next();
};


 Mymiddleware.prototype.usrdelmiddle   = function(req,res,next)
{
  ops.usrdel("59458cec6069452720340676");
  req.myresult="{Result:Deleted}";
  next();

};

 Mymiddleware.prototype.usrupdatemiddle= function(req,res,next)
{
  ops.usrupdate("59458cec6069452720340676","Amit","IT-Software","Cisco",5,20,"C,C++,Golang,Lua,Shell, Web Technologies","Masters from IITG","Banglore","NULL",40);
  req.myresult="{Result:Updated}";
  next();
};


 Mymiddleware.prototype.usrshowmiddle  = function(req,res,next)

{
  ops.usrshow("59458cec6069452720340676",function(result){
    req.myresult= result;
    next();
  })
};

 Mymiddleware.prototype.usrshowallmiddle  = function(req,res,next)

{
  ops.usrshowall(function(result){
    req.myresult= result;
    next();
  });
};

Mymiddleware.prototype.usrcntmiddle  = function(req,res,next)

{
 ops.usrcount(function(result){
   req.myresult= result;
   next();
 });
};


////// Job Collection ////

 Mymiddleware.prototype.Jobaddmiddle   = function(req,res,next)
{
  var result= ops.Jobadd("HR","People Management", "Management","Cisco","Humane Resource Management","MBA","We are looking for candidates,Who are good with people managemnt",200,"2/2/2017");
  req.myresult="{Result:Added}";
  next();
};


 Mymiddleware.prototype.Jobdelmiddle   = function(req,res,next)
{
  ops.Jobdel("59458cdc6069452720340675");
  req.myresult="{Result:Deleted}";
  next()
};

 Mymiddleware.prototype.Jobupdatemiddle= function(req,res,next)
{
  ops.Jobupdate("59458cdc6069452720340675","HR","Marketting", "Company Marketting","BeProdigy", "Do something","MBA in finance","We are looking for candidates,Who are good in finance",102);
  req.myresult="{Result:Updated}";
  next()

};


 Mymiddleware.prototype.Jobshowmiddle  = function(req,res,next)

{
  ops.Jobshow("59458cdc6069452720340675",function(result){
     req.myresult= result;
    next();
  });
};
 Mymiddleware.prototype.Jobshowallmiddle  = function(req,res,next)

{
  ops.Jobshowall(function(result){
     req.myresult= result;
    next();
  });
};

Mymiddleware.prototype.Jobcntmiddle  = function(req,res,next)

{
 ops.jobcount(function(result){
    req.myresult= result;
   next();
 });
};



//Company Collection/////



 Mymiddleware.prototype.cmpnyaddmiddle   = function(req,res,next)
{
  ops.cmpnyadd("BeProdigy","IT","Admin,Editor","Banglore","https://beprodigy.com");
  req.myresult="{Result:Added}";
  next()

};




 Mymiddleware.prototype.cmpnydelmiddle   = function(req,res,next)
{
  ops.cmpnydel("59458cf56069452720340677");
  req.myresult="{Result:Deleted}";
  next()
};

 Mymiddleware.prototype.cmpnyupdatemiddle= function(req,res,next)
{
  ops.cmpnyupdate("59458cf56069452720340677","Cisco Systems","IT","Admin,Software Engineer","Banglore","https://cisco.com");
  req.myresult="{Result:Updated}";
  next()
};


 Mymiddleware.prototype.cmpnyshowmiddle  = function(req,res,next)

{
  ops.cmpnyshow("59458cf56069452720340677",function(result){
     req.myresult= result;
    next();
  });
};
 Mymiddleware.prototype.cmpnyshowallmiddle  = function(req,res,next)

{
  ops.cmpnyshowall(function(result){
     req.myresult= result;
    next();
  });
};

Mymiddleware.prototype.cmpnycntmiddle  = function(req,res,next)

{
 ops.cmpnycount(function(result){
    req.myresult= result;
   next();
 });
};

exports.Mymiddleware =  Mymiddleware;
