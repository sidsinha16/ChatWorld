var express =require('express');
var bodyParser = require('body-parser')




//Express connection
var app = express();

//for post request
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//link the view
app.use("/",express.static("views"))
app.use("/public/css",express.static("public/css"))
app.use("/public/js",express.static("public/js"))

//linking html file
app.engine('html', require('ejs').renderFile);

//GET 
app.get('/login',(req,res)=>{
	res.render('login.html');
});

//POST
app.post('/login',urlencodedParser,(req,res)=>{
	console.log(req.body);
	res.render('success.html');
});



app.listen(3000,()=>{
	console.log("Server connected to port 3000");
});