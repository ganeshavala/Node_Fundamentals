const http = require("node:http");

const Server =http.createServer((req,res)=>{

    if(req.url ==="/"){
        res.writeHead(200,{
            "Content-Type":"text/plain"
        });
        res.end("Home Page")
    }
   else if(req.url === ' '){
    for(let i=0;i<6000000000;i++){}
    res.writeHead(200,{
        "Content-Type":"text/plain"
    });
    res.end("Slow Page")
   }
   
})

Server.listen(8080,()=>{
    console.log("server running on port 8080");
})