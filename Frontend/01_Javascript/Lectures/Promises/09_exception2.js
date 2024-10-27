function manualException(){
    const randomNumber=Math.floor(Math.random()*100);  //calculates random number and multiply it with 100 and gives floor value
    if(randomNumber%2===0){
    //random number is even
      return randomNumber;   //resolve
    }
    else{
        //random number is odd
        return "Random number is odd";  //reject
    }
}
console.log(manualException());

function  caller(){
    try{
        console.log("This is risky");
        const response=manualException();
        console.log("Risky code working fine: ",response);
    }
    catch(exception){
     console.log("Bad Luck we are in catch");
     console.log(exception);
    }
}
console.log(caller());