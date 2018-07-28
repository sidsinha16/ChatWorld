var express =require('express');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//Express connection
var app = express();

//Connection withn MongoDB
mongoose.connect('mongodb://spyder:sid123@ds153841.mlab.com:53841/momgochat',{ useNewUrlParser: true })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

//import models
import { login } from './models';

//link the view
app.use("/",express.static("views"))
app.use("/public/css",express.static("public/css"))
app.use("/public/js",express.static("public/js"))

//linking html file
app.engine('html', require('ejs').renderFile);


//controller
var loginController = require('./controller/loginController');
loginController(app);



app.listen(3000,()=>{
	console.log("Server connected to port 3000");
});