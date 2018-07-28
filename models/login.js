var mongoose = require('mongoose');

var loginSchemna = new mongoose.Schema({
	username: String,
	email: String ,
	password: String,
	confirmPassword: String,
	Age : Number,
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now } 
});

module.exports = mongoose.model('login', EmployeeSchema);