var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var mongoose = require('mongoose');

//import models
var login = require('login');

//model
var Employee = mongoose.model("login");


module.exports=function(app){

	//GET 
	app.get('/login',(req,res)=>{
		res.render('login.html');
	});

	//POST
	app.post('/login',urlencodedParser,(req,res)=>{
		console.log(req.body);
		res.render('success.html');
	});
}