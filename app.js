// const express = require('express');
// const app= new express();
// const port =3000;
// app.get('/',(req,res)=>{
//     res.send('Hello World');
// });



// app.get('/newUser', (req, res) => {
//     let username = req.query.username || '';
//     const password = req.query.password || '';
  
//     username = username.replace(/[!@#$%^&*]/g, '');
  
//     if (!username || !password || users[username]) {
//       return res.sendStatus(400);
//     }
  
//     const salt = crypto.randomBytes(128).toString('base64');
//     const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');
  
//     users[username] = { salt, hash };
  
//     res.sendStatus(200);
//   });

//   app.get('/auth', (req, res) => {
//     let username = req.query.username || '';
//     const password = req.query.password || '';
  
//     username = username.replace(/[!@#$%^&*]/g, '');
  
//     if (!username || !password || !users[username]) {
//       return res.sendStatus(400);
//     }
  
//     crypto.pbkdf2(
//       password,
//       users[username].salt,
//       10000,
//       512,
//       'sha512',
//       (err, hash) => {
//         if (users[username].hash.toString() === hash.toString()) {
//           res.sendStatus(200);
//         } else {
//           res.sendStatus(401);
//         }
//       }
//     );
//   });
  
  
//   app.listen(port,()=>{
//     console.log( `Express server is running on ${port}`);
// })

// const {inc,dec,getCount} = require("./myModule");

// console.log(inc());
// console.log(dec());

const events = require('events');

let emitter = new events.EventEmitter();

emitter.on('customEvent',(message,user)=>{
console.log(`${user}: ${message}`);
})

emitter.emit("customEvent","Hello World","Computer");
emitter.emit("customEvent","Thats pretty cool","Eve");


process.stdin.on("data",(data)=>{
    const input= data.toString().trim();
    if(input === 'exit'){
        emitter.emit("customEvent","goodbye","process");
        process.exit();
    }
    emitter.emit("customEvent",data.toString().trim(),"terminal");
})