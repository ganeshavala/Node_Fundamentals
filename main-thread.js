const http = require("node:http");
const {Worker} = require("node:worker_threads");
const Server =http.createServer((req,res)=>{

    if(req.url ==="/"){
        res.writeHead(200,{
            "Content-Type":"text/plain"
        });
        res.end("Home Page")
    }
   else if(req.url === '/slow-page'){
    const work = new Worker("./worker-thread.js");
    work.on("message",(j)=>{
        res.writeHead(200,{
            "Content-Type":"text/plain"
        });
        res.end(`Slow Page ${j}`);
    })
   }
})

Server.listen(8000,()=>{
    console.log("server running on port 8000");
})