var a=80;   //global
function num(){   //global
    var a=30;      //fun
    console.log("value of a is: ",a);   //prints a=30;
}
var a=60;   //same a as above in global scope and value of a is updated from a=80 to a=60
num();
console.log("value of a is: ",a);  //prints a=60



var b=70;
for(b=1;b<6;b++){
    console.log("value of b is: ",b);
}
console.log("value of b after for loop is: ",b)    //prints b=6
