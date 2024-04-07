const fs = require("fs");

// fs.rmdir("./your-files-here",function(err){
//     if(err){
//         throw(err);
//     }
//     console.log('your files here folder is removed');
// })

fs.readdirSync("./accounts").forEach((file)=>{
    fs.renameSync(`./accounts/${file}`,`./library/${file}`);
})

fs.rmdirSync('./accounts');