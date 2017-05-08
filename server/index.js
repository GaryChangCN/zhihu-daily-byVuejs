const http = require("http");
const server = http.createServer();
const url = require("url");
const querystring = require("querystring");

const remoteUrl = "http://news-at.zhihu.com"

server.on('request', function(req, res) {
    var urlOption = url.parse(req.url);
    var pathName = urlOption.pathname;
	if(/^\/api/.test(pathName)){
		var request = http.request(remoteUrl + pathName);
		res.setHeader("Access-Control-Allow-Origin","*");
		request.on('response', function(response) {
			var c = "";
			response.setEncoding('utf8');
			response.on('data', function(chunk) {
				c += chunk;
			});
			response.on('end', function() {
				res.writeHead(200, response.headers);
				res.write(c);
				res.end();
			})
		});
		request.on('error', function(err) {
			res.writeHead(200, {
				"Content-Type": "application/json"
			});
			res.end({ "err": err });
		});
		request.end();
	}else if(/\.(jpg|png)$/.test(pathName)){
		const remoteImage="pic1.zhimg.com";
		let headers = {
			"Referer": "https://daily.zhihu.com/"
		};
		let opt={
			hostname:remoteImage,
			port:'80',
			path:pathName,
			headers:headers
		}
		let request = http.request(opt);
		request.on('response', function(response) {
			var c = "";
			response.setEncoding('binary');
			response.on('data', function(chunk) {
				c += chunk;
			});
			response.on('end', function() {
				res.writeHead(200, response.headers);
				res.write(c, "binary");
				res.end();
			})
		});
		request.end();
	}
});
server.listen(9999, function() {
    console.log("server on port 9999");
});