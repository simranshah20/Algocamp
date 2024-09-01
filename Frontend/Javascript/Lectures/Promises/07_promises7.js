const p1=new Promise((res,rej)=>{
    console.log("Executor call back triggered by promse constructor");
    setTimeout(function timerCB(){
        console.log("Timer p1 is done");
    },500);  //timer 2 sec
})
const p2=p1.then(function p(){
    return "simran";
}); 
console.log(p1);
console.logd(p2);
