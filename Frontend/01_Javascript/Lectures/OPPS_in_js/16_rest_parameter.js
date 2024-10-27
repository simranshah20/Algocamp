function Sum(...theArgs){   //... theArgs is a rest parameter
let total=0;
for(const arg of theArgs){
    total+=arg;
}
return total;
}
console.log("Sum is: ",Sum(1,2,3));
console.log("Sum is: ",Sum(1,2,3,4,5,6,7));
