const http = require("node:http");
const fs= require("node:fs");

const reqData =null;
const writeableStream = fs.createWriteStream("./random.txt");
const Server =http.createServer((req,res)=>{
    // const name ="Ganesh";
    const superHero={
        firstName:"Bruce",
        lastName:"Wayne",
    }

    if(req.url ==="/"){
        res.writeHead(200,{
            "Content-Type":"text/html"
        });
        res.end("HomePage")
    }
   else if(req.url === '/about'){
    res.writeHead(200,{
        "Content-Type":"text/html"
    });
    res.end("About")
   }
   else if(req.url === '/api'){
    res.writeHead(200,{
        "Content-Type":"application/json"
    });
    res.end(JSON.stringify(superHero));
   }else{
    res.writeHead(404);
    res.end("No such URL exists");
   }
    
    // let html = fs.readFileSync("./index.html","utf-8");
    // html= html.replace("{{name}}",name);
    // //fs.createReadStream(__dirname+"/index.html").pipe(res);
    // //console.log(req);
    // //reqData=req.toString();
    // res.end(req.url);
})

Server.listen(8080,()=>{
    console.log(Server);
    // const readableStream = fs.createReadStream(reqData,{
    //     encoding:"utf-8",
    //     highWaterMark:4, 
    // });
    // readableStream.pipe(writeableStream);
    // console.log(readableStream);
    console.log("server running on port 3000");
})

