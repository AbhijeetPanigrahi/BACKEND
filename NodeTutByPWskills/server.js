const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url == "/home"){
        res.end("hello server");
    }
    res.end("Please check the url ....man");
})

server.listen(8000,()=>{
    console.log("Server is started");
})
