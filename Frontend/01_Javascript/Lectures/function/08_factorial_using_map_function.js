
// console.log("--factorail of a number using recursion map function--");  //to call the function recursively we need yo know the name of the function.hence,named function become superior to this.
// const a=[2,3,7,10,5];
// const result=a.map(function fact(n){
//     if(n==1){
//         return 1;
//     }
//     else{
//         return n*fact(n-1);
//     }
// });
// console.log("factorial of numbers of given array is: ",result);



// another method
console.log("--another method to find factorail of a number using recursion arrow function--");
const arr=[4,6,2,4,6];
function factorial(n){
    if(n==1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
const result=arr.map(factorial);
console.log("factorial of numbers of given array is: ",result);