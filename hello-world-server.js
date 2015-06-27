var http = require('http');
var test = require('./noname');
var test2 = require('./noname1');
var fs = require('fs');
http.createServer(function handler(req, res) {
	console.log("before");
	
//	fs.readFile('test.json', function(err, data) {
//		if(err){
//			console.log(err);
//		}else{
//			console.log('no error');
//			res.writeHead(200, {'Content-Type': 'text/plain'});
//			res.end(data);
//		}
	res.writeHead(200, {'Content-Type': 'text/plain'});
	fs.createReadStream('test.json').pipe(res);
	//});
	
	console.log("after");
    
    //res.end();
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

function addAsync(a,b,callback){
	
	var result;
	
	try{
		result = a+b;
	}catch (e) {
		// TODO: handle exception
		console.log('error');
		callback(e);
	}
	callback(null,result);
	
}
