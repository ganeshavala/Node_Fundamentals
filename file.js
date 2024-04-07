const fs = require("node:fs");
const util = require("util");
const pfs={
    readFile:util.promisify(fs.readFile)
};


// const fileContents=fs.readFileSync("processed.txt","utf-8");
// console.log(fileContents);
// console.log('----------------------');
// fs.readFile('processed.txt',(error,data)=>{
//     if(error){
//         throw(error);
//     }
//     console.log(`Received data is ${data}`);
// });

// fs.writeFile("test.txt","Happy Ending",{flag:'a'},(err)=>{
//     if(err){
//         throw(err);
//     }
//     console.log("text is appeneded");
// })

// function readConfigFile(path,callBack){
//     fs.readFile(path, "utf-8",(err,text)=>{
//         if(err){
//             console.log(err);
//             callBack(null);
//             return;
//         }
//         let data=null;
//         try{
//             data = JSON.parse(text);
//         }
//         catch(error){
//             console.log(error);
//         }
//         callBack(data);
//     })
// }

// readConfigFile("test.txt",(data)=>{
//     console.log(JSON.stringify(data));
// })

async function readConfigFileUsingUtil(path){
    const text= await pfs.readFile(path,"utf-8");
    return JSON.parse(text);
}

readConfigFileUsingUtil("test.txt").then(data=>console.log(data));