const arr=[3,8,10,90,33];
function myMap(arr,fn){    //here myMpa function is higher ordered function(hof)
let p=[];   //create a new array to store the results
for(let i=0;i<arr.length;i++){
    p.push(fn(arr[i]));
}
return p;
}
console.log(myMap(arr,function q(element){  //here function q is a callback function
    return element**2;
}))