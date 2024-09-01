function* gen(arr){
    for(let i=0;i<arr.length;i++){
        console.log("Inside Generator");
        if(i%2==0)
       {
        yield arr[i];
       }
    }
}
const it=gen([2,3,4,5,6])
console.log(it.next());
console.log("Out");
console.log(it.next());
console.log("Out");
console.log(it.next());
console.log("Out");