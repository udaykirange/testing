var http=require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function(req,res){
	var parts=url.parse(req.url,true);
	var pathwithslash=parts.pathname;
	var fname=pathwithslash.substring(1);
	
	fs.readFile(fname,function(err,data){
		res.writeHead(200,{'Content-Type':'text/html'});
		if(!err)
		{
			res.write(data.toString());
		}
		else
		{
			res.write("File Not Found");
		}
		res.end();
	})
}).listen(9000);
console.log("Server Started on 9000");