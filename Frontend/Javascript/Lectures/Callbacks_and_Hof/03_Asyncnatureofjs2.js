function createTimer(time,timerId){
    console.log("Creating a new timer with ID: ",timerId);
    setTimeout(()=>{
        console.log(`TIME WITH ID ${timerId} is done`);
    },time);
    console.log("Successfully Created a new timer with ID: ",timerId)
}
console.log("Starting a code");
createTimer(3000,4);
createTimer(0,6);;
console.log("staring a loop");
for(let i=0;i<10000000;i++){
  //something is going on 
}
console.log("loop is done");
console.log("Last line of code");