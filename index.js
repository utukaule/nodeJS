const http = require("http")
const fs = require("fs")

const port = 4000
const hostname = "localhost"
const home = fs.readFileSync("./index.html","utf-8")
const about = fs.readFileSync("./about.html","utf-8")

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        return res.end(home)
    }
    if(req.url === "/about"){
        return res.end(about)
    }
    if(req.url === "/contact"){
        return res.end("contact us")
    }
    else{
        return res.end("404 page not found")
    }
})

server.listen(4000,"localhost",()=>{
    console.log(`server at http://${hostname}:${port}/`)
})