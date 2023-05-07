const http = require('http');

const server = http.createServer((req,res)=>{
  //req object anything that is coming from frontend
  //res we are sending data to frontend
  res.writeHead(201,{'Content-Type':'text/html'});
  res.end('<h1>welcome to html</h1>');
});

server.listen(3000,()=>{
    console.log("server is listening on 3000");
})