const readLine = require("readline");
const {EventEmitter} = require("events");
const e = require("express");
const rl=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});



module.exports =(questions,done)=>{
    const answers=[];
    const emitter = new EventEmitter();
    const questionAnswered = answer=>{
        emitter.emit("answer",answer);
        answers.push(answer.trim());
        if(answers.length<questions.length){
            rl.question(questions[answers.length],
                questionAnswered)
        }
        else{
            return done(answers);
        }
    }
    rl.question(questions[0] ,questionAnswered);
    return emitter;
}