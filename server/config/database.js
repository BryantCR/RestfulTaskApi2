var fs = require("fs");
var path = require("path");
const mongoose = require("mongoose");
var models_path = path.join(__dirname, "./../models");

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf(".js") >= 0)
		require(models_path+"/"+file);
});

mongoose.connection.on('error', err => {
    console.error(`Mongoose default connection error: ${ err }`);
    process.exit(0);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});