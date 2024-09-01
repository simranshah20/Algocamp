setTimeout(function T(){
    console.log("Asyn nature  of js");   //asyn will be printed after after 40 milisec  at 4th
},40);
console.log("end1");  //print at 1st

setTimeout(function s(){
    console.log("Hello");   //print at 5th
},40);
console.log("end2");  //print at 2nd

let x=0;
for(let i=0;i<5;i++){
    x=x+1;  //print at 3rd
}
console.log(x);
