console.log("process.argv");
// process.on("SIGINT",()=>{console.log("Ignoring your stop commands")});
console.log(process.argv,set);
process.on('unhandledRejection',(reason,promise)=>{
    console.log(reason,promise);
})
// process.setUncaughtExceptionCaptureCallback(e=>{
//     console.log("Unhandled exception occured: ",e);
// });
console.log("process.argv");
console.log("process.argv");