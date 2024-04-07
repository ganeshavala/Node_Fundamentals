const fs = require("node:fs");
const zlib=require("node:zlib");

const unZip=zlib.createUnzip();
const gzip =zlib.createGzip();

const readableStream = fs.createReadStream("./test.txt",{
    encoding:"utf-8",
    highWaterMark:4, 
});

readableStream.pipe(gzip).pipe(fs.WriteStream("./random.txt.gz")).pipe(unZip);

const writeableStream = fs.createWriteStream("./random.txt");

// readableStream.on("data",(chunk)=>{
//     console.log(chunk);
//     writeableStream.write(chunk);
// });

readableStream.pipe(writeableStream);
