var http = require('http');
var bl = require('bl');
// var concatStream = require('concat-stream');

var urls = process.argv.slice(2);
var results=[];
numReturned=0;

urls.forEach(function(url,i) {
	http.get(url, function(response){
		response.setEncoding("utf8");
		response.pipe(bl(function(err, data){
				if(err)
					return console.error(err);
				results[i]=data.toString();
				numReturned++;
				if(numReturned>=urls.length)
					console.log(results.join("\n"))
			}));

	})
})
