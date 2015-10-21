var fs = require('fs')
var file = process.argv[2]
//console.log(file)
fs.readFile(file, function(err,buffer){
	if(!err){
		var count = buffer.toString().split('\n').length - 1;
		console.log(count)
	}
}
