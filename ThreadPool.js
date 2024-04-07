// const fs = require("node:fs");

// console.log("First");

// fs.readFile("./file.txt","utf-8",(err,data)=>{
//     console.log("File Contents");
// });

// console.log("Last");

// const crypto = require("node:crypto");

// process.env.UV_THREADPOOL_SIZE=16;
const https = require("node:https")
const MAX_CALLS=12;

const start = Date.now();

for(let i=0;i<MAX_CALLS;i++){
    https.request("https://www.google.com",(res)=>{
        res.on("data",()=>{});
        res.on("end",()=>{
            console.log(`Request: ${i+1}`,Date.now()-start);
        })
        
    })
    .end();
    // crypto.pbkdf2("password","salt",100000,512,'sha512',()=>{
    //     console.log(`Hash: ${i+1}`, Date.now()-start);
    // });
}
// crypto.pbkdf2Sync("password","salt",100000,512,'sha512');
// crypto.pbkdf2Sync("password","salt",100000,512,'sha512');
// crypto.pbkdf2Sync("password","salt",100000,512,'sha512');

console.log("Hash: ",Date.now()-start);