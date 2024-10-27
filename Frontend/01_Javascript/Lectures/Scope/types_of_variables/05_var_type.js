var x=10;   //global
console.log(x,y);  //prints 10 undefined y=undefined because y is not in global scope
if(true){
    var x=20;  //global
    var y=30;  //global
    console.log(x,y);   //prints 20 30
}
console.log(x,y);  //value of x=10 is replaced with x=20 and prints 20 30