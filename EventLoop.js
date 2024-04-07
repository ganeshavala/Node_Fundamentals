// setTimeout(()=>console.log("this is settimeout 1"),0);
// setTimeout(()=>{
//     console.log("this is settimeout 2");
//     process.nextTick(()=>{
//         console.log('process nextTick queue callback inside SetTimeout callback 2 is executed');
//     })
// },0);
// setTimeout(()=>console.log("this is settimeout 3"),0);
// process.nextTick(()=>{
//     console.log('process nextTick queue callback 1 is executed');
// })


// process.nextTick(()=>{
//     console.log('process nextTick queue callback 2 is executed');
//     process.nextTick(()=>{
//         console.log('process nextTick queue callback inside Next tick callback 2 is executed');
//     })
// })

// process.nextTick(()=>{
//     console.log('process nextTick queue callback 3 is executed');
// });

// Promise.resolve().then(()=>{
//     console.log("Promise queue callback 1 is executed");
// })

// Promise.resolve().then(()=>{
//     console.log("Promise queue callback 2 is executed");
//     process.nextTick(()=>{
//         console.log('process nextTick queue callback inside Promise callback 2 is executed');
//     })
// })

// Promise.resolve().then(()=>{
//     console.log("Promise queue callback 3 is executed");
// })

// setTimeout(()=>console.log("this is settimeout 1"),1000);
// setTimeout(()=>console.log("this is settimeout 2"),500);
// setTimeout(()=>console.log("this is settimeout 3"),0);
// const fs = require("node:fs");

// console.log(fs.readFileSync(__filename));

// fs.readFile(__filename,()=>{
//     console.log("this is readFile 1");
//     setImmediate(()=> console.log("setImmediated callback inside readFile is executed"),0);
//     process.nextTick(()=>{
//         console.log('process nextTick queue callback inside readFile is executed');
// });

// Promise.resolve().then(()=>{
//         console.log("Promise queue callback inside readFile is executed");
// });
// })
const fs = require("node:fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close",()=>{
    console.log("this is from readablestream close event callback");
})



// setImmediate(()=> console.log("setImmediated callback is executed"),0);
// for(let i=0;i<200000000;i++){}
setImmediate(()=> console.log("setImmediated callback 1  is executed"),0);
setTimeout(()=>console.log("this is settimeout 1"),0);
// setImmediate(()=> {
//     console.log("setImmediated callback 2 is executed");
//     process.nextTick(()=>{
//         console.log('process nextTick queue callback inside SetTimeOut is executed');
// });

// Promise.resolve().then(()=>{
//         console.log("Promise queue callback inside SetTimeOut is executed");
// });
// });

process.nextTick(()=>{
    console.log('process nextTick queue callback 1 is executed');
});

Promise.resolve().then(()=>{
    console.log("Promise queue callback 1 is executed");
});
// setImmediate(()=> console.log("setImmediated callback 3 is executed"),);