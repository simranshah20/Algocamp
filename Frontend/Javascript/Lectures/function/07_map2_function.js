const a=[2,3,7,10,5];
function customArray(a,fn){
    const b=[];   //initialized new array
    for(let i=0;i<a.length;i++){   //go one by one to all elements of the array
       b.push(fn(a[i]));    //call the fn on the element and store the result in the b array 
    }
    return b;   //returns the value of b array
}
console.log(customArray(a, function(x){return x*x;}));


// const a=[2,3,7,10,5];
// const result=a.map(function fn(Element){   //go one by one to all elements of the array
//     return Element*2;
//      });
//      console.log(result);