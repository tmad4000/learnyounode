
var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
	if(req.method != "GET") {
		return res.end('send GET req')
	}

	var u=url.parse(req.url, true);

	var d=new Date(u.query['iso'])
	
	var out = {}

	if (/^\/api\/parsetime/.test(req.url)) {
	// if(u.pathname=="/api/parsetime") {
		out["hour"]=d.getHours()
		out["minute"]=d.getMinutes()
		out["second"]=d.getSeconds()
	}
	else if (/^\/api\/unixtime/.test(req.url)) {
	// else if(u.pathname=="/api/unixtime") {
		out["unixtime"]=d.getTime()	
	}
	
	if(out) {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		// res.write(JSON.stringify(out))
		// res.end()
		res.end(JSON.stringify(out))

	}
	else 
		res.writeHead(404)
		res.end('invalid url')

	



})

server.listen(Number(process.argv[2]))