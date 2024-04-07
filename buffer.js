const buffer= new Buffer.from('Vishwas');

console.log(buffer.toJSON());
console.log(buffer);
console.log(buffer.toString());

buffer.write("CodeEvolution");

console.log(buffer.toJSON());
console.log(buffer);
console.log(buffer.toString());

 let b = Buffer.from([0x41,0x42,0x43]);
 console.log(b.toString());
 console.log(b.toString('base64'));

 let computer = Buffer.from("IBM3111","ascii");

 for(let i=0;i<computer.length;i++){
    computer[i]--;
 }
console.log(computer.toString('ascii'));
console.log(computer.subarray(0,5).map(x=>x+1).toString())

let zeros = Buffer.alloc(1024);
let ones = Buffer.alloc(128,1);
let dead = Buffer.alloc(1024, "DEADBEEF","hex");

console.log(dead.readUInt32BE(0));
console.log(dead.readUInt32BE(1));
console.log(dead.readBigUInt64BE(6));
console.log(dead.readUInt32LE(1020));