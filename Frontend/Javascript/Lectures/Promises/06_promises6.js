const p1=new Promise((res,rej)=>{
    console.log("Executor call back triggered by promse constructor: p1");
    setTimeout(function timerCB(){
        console.log("Timer p1 is done");
    },500);  //timer 2 sec
})
p1.then(function p(){console.log("p")},function q(){console.log("q")});  //only for regiistration 

setTimeout(function timerCB(){
    console.log("Timer 1 is done");
},3000);  //timer 2 sec
const s=new Promise(function exec(res,rej){
    console.log("Executor call back triggered by promse constructor");
    console.log(randomNumber);
    setTimeout(function prCB(){
        const randomNumber=Math.floor(Math.random()*100);  //calculates random number and multiply it with 100 and gives floor value
    console.log(randomNumber);
    if(randomNumber%2===0){
    //random number is even
      res(randomNumber);   //resolve
    }
    else{
        //random number is odd
        rej(randomNumber);  //reject
    }
    },4000); //timer 3 sec
});
console.log(p1);
s.then(function f(){console.log("Executing f")},function g(){console.log("Executing g")});
s.then(function a(){console.log("Executing a")},function b(){console.log("Executing b")});
for(let i=0;i<10000000000;i++){}
