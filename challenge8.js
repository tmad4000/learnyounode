var http = require('http');
var bl = require('bl');
// var concatStream = require('concat-stream');

var url = process.argv[2];
http.get(url, function(response){
	response.setEncoding("utf8");
	response.pipe(bl(function(err, data){
		if(err)
			return;
		console.log(data.length);
		console.log(data.toString());
	}));
	


	/*
	var data = "";
	response.on("data",function(buffer){
		data += buffer.toString();	
	});
	response.on("end", function(){
		console.log(data.length);
		console.log(data);
	});
	*/
});
