const p1=new Promise((res,rej)=>{
    setTimeout(function timerCB(){
        console.log("Timer 1 is done");
        rej(100);
    },500); 
})
const p2=p1.then(function p(){ throw 100},function p(){return 99}); 
// console.log(p1);
// console.logd(p2);
