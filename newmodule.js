var filterdirectory = require('./directoryfilter.js')
filterdirectory(process.argv[2],process.argv[3],function(err,data){
	if(err)
		return console.error(err);
	data.forEach(function(x){
		console.log(x);
	});
});
