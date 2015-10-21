var fs = require('fs')
var path = require('path')
//var dir = process.argv[2];
//var ext = process.argv[3];

function filterDirectory(dir, ext, callback){
fs.readdir(dir, function(err,list){
	if(err)
		return callback(err);
	var count = 0;
	var data = list.filter(function(x){
		return path.extname(x) === "."+ext;
	}) 
	callback(null, data)
})
}
module.exports = filterDirectory 
