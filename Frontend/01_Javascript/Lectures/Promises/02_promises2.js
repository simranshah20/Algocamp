const pr=new Promise((res,rej)=>{   //here promise is a constructor and it take call back function
   console.log("Executor call back triggered by promse constructor");
});
console.log("created the promise object");
console.log(pr);