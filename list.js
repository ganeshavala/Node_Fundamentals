const fs = require('fs');

// fs.readdir('./',function(err,files){
//     if(err){
//         throw(err);
//     }
//     console.log(files);
// });


// console.log("reading files");

//let ipsum = fs.readFileSync("./readme.Md","UTF-8");
//  fs.readFile("./readme.Md","UTF-8",(err,ipsum)=>{
//     console.log(ipsum);
//  });

//  console.log("....reading file");
// console.log(ipsum);

// const fs = require("fs");

let md=`
This is a new file
==================

ES6 Template Strings are cool. They honor whiteSpace.

*Template Strings
*Node File Systems
*Readline CLIs

`

fs.writeFile("javascript.md",md.trim(), function(err){
    if(err){
        throw(err);
    }
    fs.appendFileSync("javascript.md","\n\n ###Node.js Everyone");
    console.log("Markdown Created");
});