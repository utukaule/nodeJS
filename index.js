//making server
const http = require('http');

http.createServer((req,res)=>{
    res.write("connected")
    res.end();
}).listen(4500);
console.log("hi")