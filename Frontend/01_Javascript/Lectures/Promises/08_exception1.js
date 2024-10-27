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