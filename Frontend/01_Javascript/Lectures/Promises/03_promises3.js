const pr=new Promise(function exec(res,rej){   //here promise is a constructor and it take call back function
    console.log("Executor call back triggered by promse constructor");
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
 });
 console.log("created the promise object");
 console.log(pr);