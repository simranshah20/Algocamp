//promise status
const pr=new Promise((res,rej)=>{   //here promise is a constructor and it take call back function
    console.log("Executor call back triggered by promse constructor");
    setTimeout(()=>{
        const randomNumber=Math.floor(Math.random()*100);  //calculates random number and multiply it with 100 and gives floor value
    console.log(randomNumber);
    if(randomNumber%2===0){
    //random number is even
      res();   //resolve
    }
    else{
        //random number is odd
        rej();  //reject
    }
    },5000);
 });
 console.log("created the promise object");
 console.log(pr);