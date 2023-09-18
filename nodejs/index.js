const http = require('http' );


http.createServer((req,resp)=>{
    resp.write("<h1>Hello This Is Adil Malik</h1>"); 
    resp.end("<h1>Ok Tata By By</h1> ");
}).listen(4500);
